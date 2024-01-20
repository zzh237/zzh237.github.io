---
layout: post-index
permalink: /readings/
title: Readings
tagline: A List of Reading Posts
tags: [readings]
comments: false
---

Matrix multiplication on GPUs may currently be the most important algorithm that exists,
considering it makes up almost all the FLOPs during the training and inference of large deep-
learning models. So how much work is it to write a performant CUDA SGEMM3 from scratch? I’ll
start with a naive kernel and step-by-step apply optimizations until we get within 95% (on a good
day) of the performance of cuBLAS (NVIDIA's official matrix library)


# Understanding GPU Architecture with a Corporate Analogy

Imagine you're working in a large company, which has many departments, each with different teams handling specific tasks. In this analogy, the GPU represents the entire company, while the various computing units and types of memory are like different parts and resources of the company.
Imagine a large factory, where the factory contains multiple workshops (Blocks), each workshop has several rows of workers (Warps), and each row is composed of a fixed number of workers (Threads), each worker has their own toolbox (Registers) and a shared tool cabinet in the workshop (Shared Memory).

## Components of the GPU Architecture

### GPU Node
- **Analogy:** The entire company building.
- **Description:** A GPU node can have multiple GPU processors, akin to the main structure of the company.

### Streaming Multiprocessor (SM) or GPU Core
- **Analogy:** Departments in the company building.
- **Description:** Each SM is an independent computing unit on the GPU, capable of executing tasks independently, much like departments within a company.

### Block
- **Analogy:** A small team within a department.
- **Description:** A Block is a group of threads that execute the same kernel together. Threads within a Block can communicate through Shared Memory.

### Block Size
This refers to the total number of workers in a workshop. In this example, if each workshop has 128 workers, then the Block Size is 128.


### Warp
- **Analogy:** A row of employees in a small team, moving and working together.
- **Description:** In NVIDIA GPUs, a Warp consists of 32 threads. 
#### Active Warp
An active warp is like a row of workers who are working. In this example, if the workshop's space and resources are limited, and only 8 rows of workers can work at the same time, then the number of active Warps is 8.

### Thread
- **Analogy:** Individual employees in the company.
- **Description:** Threads are the basic units of execution in a GPU.
Each worker here represents a thread. If a worker needs to complete 128 tasks, they need enough tools (registers) to complete these tasks.

### Registers
- **Analogy:** Drawers on an employee's desk for quick access to tools or files.
- **Description:** Registers are private, fast storage spaces for each thread.

### Shared Memory
- **Analogy:** A common table in the office where team members can place and share files or tools.
- **Description:** In GPUs, Shared Memory is a fast storage space shared by threads within a Block.
Each worker’s toolbox can hold many tools, but space is limited. If each worker needs 128 tools to complete their tasks, then their toolbox needs to have space for at least 128 tools.


### Tile
- **Analogy:** A subset of a project handled by a team, like a sub-matrix in matrix multiplication.
- **Description:** In GPU computing, a Tile often refers to a subset of the data being processed.

## Hierarchy from Largest to Smallest:

- GPU Node > Streaming Multiprocessors (SMs) / GPU Cores > Blocks > Warps > Threads > Tiles > Registers > Shared Memory

### Additional Notes
In actual GPU architecture, both Shared Memory and Registers are resources inside each SM. A Tile is a logical division, not a physical unit. Each Thread can access its own set of Registers, and all Threads within a Block share the same Shared Memory area. Each SM can have multiple Blocks, and multiple Warps execute in parallel within an SM during runtime.


### Occupancy
This is an indicator of the operational efficiency of the workshop. It refers to the proportion of working rows of workers in the workshop relative to the total available rows of workers. If the workshop can accommodate 32 rows of workers working at the same time, but in reality, only 8 rows are working, then the occupancy is 25%.

## Calculating Occupancy
We calculate the occupancy rate based on the number of workers (Threads), the number of workers per row (Warp size, usually 32), the total number of rows of workers that the workshop can accommodate (the workshop's Warp capacity), and the size of each worker's toolbox (Registers) and the shared tool cabinet (Shared Memory).

Why does each worker processing 128 results need space for 128 tools in their toolbox? Because each task result requires a tool from the toolbox to record it. The size of the block is equal to the number of threads because the total number of threads in a block is the block's size. The number of workers (threads) here is the number of tasks, which is the number of tasks each worker needs to complete.

Reducing the number of tasks each worker needs to complete (for example, from 128 to 64) allows each worker’s toolbox (Registers) to be smaller, enabling the workshop to accommodate more rows of workers (Warps), thereby improving the operational efficiency (Occupancy) of the factory.

This illustrates why choosing each thread to use fewer registers, and allocating shared memory appropriately, can allow more warps to work at the same time, improving the occupancy of the entire workshop (Block), and thereby possibly improving the overall efficiency of the factory (GPU).



# Understanding GPU Efficiency Through a Parking Lot Analogy

Imagine a parking lot (GPU) with many parking spaces (Registers), where each car (Thread) requires a space when it arrives. Within the parking lot, there are designated areas (Blocks) where a certain number of cars can be accommodated (Warp size, typically 32 cars).

## Reducing Each Worker's Task Count
Suppose initially every car is a bus, and each bus (Thread) needs four parking spaces (Registers) to park. If we switch to smaller cars (reducing the number of registers needed per thread), then each small car only needs two parking spaces.

## The Parking Lot Can Accommodate More Vehicles (Warps)
When we use small cars instead of buses, the space that originally could only park 8 buses can now accommodate 16 small cars. This is because the space needed per car has been halved, so the same area can accommodate more vehicles.

## Improving the Operational Efficiency (Occupancy) of the Parking Lot
If every area (Block) in the parking lot is filled with cars, then the parking lot operates very efficiently. If there are many empty parking spaces in an area, it means that the area is not being fully utilized, and the efficiency is low.

## Bringing the Parking Lot Back to Our GPU Model
In our GPU model, each car represents a thread, and parking spaces are registers. If each thread uses fewer registers, then the same area (Block) can have more active groups of threads (Warps) working. Since the total number of registers occupied by each group of threads is reduced, GPU resources can be allocated to more groups of threads, allowing more computational tasks to be executed at the same time.

Therefore, reducing the number of registers required per thread effectively reduces the resources needed per thread, allowing the GPU to support more threads working simultaneously. This is the principle of improving occupancy, and consequently, it may increase the efficiency of the GPU.


# Understanding SGEMM in GPU Programming

SGEMM stands for Single-precision General Matrix Multiply, referring to the computational core (Kernel) for general matrix multiplication using single-precision floating-point numbers. In GPU programming, a Kernel is a function that runs on the GPU to perform parallel computations. The SGEMM Kernel is a specially optimized function designed for efficiently executing matrix-matrix multiplication on GPUs.

## SGEMM Kernel Size
The "size" here typically does not refer to the amount of memory occupied but refers to the dimensions of the matrix that the Kernel can handle. The Kernel's code size is usually fixed, but it can process matrix multiplications of any size, depending on how it is designed and optimized.

## Kernel Location
The SGEMM Kernel is code that runs in the GPU's memory, not a physical location but a logical existence. When you launch a Kernel, your CPU (host) sends this code to be executed on the GPU.

## Utilizing Shared Memory to Reduce Memory Access Latency
When the text mentions utilizing Shared Memory to reduce access latency, it refers to using the shared memory on the GPU to store data that the Kernel frequently accesses during computation. Since shared memory is much faster than global memory, this can reduce the time taken for data access and improve performance.

## Loop Unrolling in GPU Programming
Loop unrolling is a programming technique that can reduce the overhead of loops and enhance performance. In GPU programming, loop unrolling improves performance by decreasing the number of loop iterations and increasing the workload for each iteration.

## Vector Read Instructions LDS.128
The mentioned LDS.128 vector read instructions refer to an optimization technique that allows reading 128 bits of data at once (in this context, usually 4 single-precision floating-point numbers, or float4). This can reduce the number of memory access instructions and improve the utilization of memory bandwidth since data is processed in vector form.

## Matrix Transposition for LDS.128 Instruction
Finally, to utilize the LDS.128 instructions, the input matrix might need to be transposed. Transposition is the interchange of rows and columns in a matrix, which can be more efficient when reading continuous segments of the matrix since memory is arranged in row-major order.

Thus, optimizing the performance of the SGEMM Kernel is a multi-step process involving resource allocation, memory access patterns, and coding techniques to achieve performance levels close to professional libraries like cuBLAS.

[SGEMM](/downloads/readings/matrix_multiplication/SGEMM.md), [FLOPs](/downloads/readings/matrix_multiplication/FLOPs.md)






