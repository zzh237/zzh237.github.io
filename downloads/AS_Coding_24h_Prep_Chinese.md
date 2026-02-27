# 24小时Applied Scientist面试突击指南
# 24-Hour Applied Scientist Coding Interview Crash Course

**适合基础较弱的候选人 / For candidates who need fundamentals review**

---

# 📅 24小时学习计划 / 24-Hour Study Plan

| 时间 | 内容 | 目标 |
|------|------|------|
| **第1-3小时** | 数据结构基础 | 理解 Array, Hash Map, Set |
| **第4-6小时** | 基础算法模板 | 掌握 Two Pointers, Sliding Window |
| **第7-9小时** | Binary Search | 必考内容! |
| **第10-12小时** | BFS/DFS基础 | 树和图遍历 |
| **第13-15小时** | LeetCode Easy练习 | 做10道简单题 |
| **第16-18小时** | ML相关编程 | Gradient Descent, k-NN |
| **第19-21小时** | LeetCode Medium练习 | 做5道中等题 |
| **第22-24小时** | 复习 + 休息 | 回顾模板, 早点睡觉 |

---

# 📚 第一部分: 数据结构基础 (3小时)
# Part 1: Data Structures Fundamentals

## 1.1 Array (数组)

**什么是数组?** 
- 连续内存存储的元素集合
- 通过索引(index)快速访问: O(1)
- 插入/删除慢: O(n)

```python
# 创建数组
arr = [1, 2, 3, 4, 5]

# 访问元素 - O(1)
print(arr[0])    # 输出: 1
print(arr[-1])   # 输出: 5 (最后一个)

# 遍历数组
for i in range(len(arr)):
    print(arr[i])

# 更好的遍历方式
for num in arr:
    print(num)

# 带索引遍历
for i, num in enumerate(arr):
    print(f"索引{i}: {num}")

# 常用操作
arr.append(6)      # 末尾添加
arr.pop()          # 删除最后一个
arr.insert(0, 0)   # 在索引0插入
len(arr)           # 数组长度
```

## 1.2 Hash Map / Dictionary (哈希表/字典)

**什么是哈希表?**
- 键值对存储 (key-value pairs)
- 查找、插入、删除都是 O(1)
- **面试最常用的数据结构!**

```python
# 创建字典
d = {}
d = dict()
d = {"apple": 1, "banana": 2}

# 添加/修改
d["orange"] = 3
d["apple"] = 10   # 覆盖原值

# 查找 - O(1)
if "apple" in d:
    print(d["apple"])

# 安全获取 (key不存在时返回默认值)
value = d.get("grape", 0)  # 返回0

# 遍历
for key in d:
    print(key, d[key])

for key, value in d.items():
    print(key, value)

# 计数器 - 非常常用!
from collections import Counter
nums = [1, 2, 2, 3, 3, 3]
count = Counter(nums)  # {3: 3, 2: 2, 1: 1}
```

**典型应用: Two Sum (两数之和)**
```python
def two_sum(nums, target):
    """
    题目: 找两个数，和等于target，返回它们的索引
    思路: 用哈希表存储"我需要的数"
    时间: O(n), 空间: O(n)
    """
    seen = {}  # 存储: 数值 -> 索引
    
    for i, num in enumerate(nums):
        complement = target - num  # 我需要的数
        
        if complement in seen:
            return [seen[complement], i]
        
        seen[num] = i
    
    return []

# 例子
nums = [2, 7, 11, 15]
target = 9
print(two_sum(nums, target))  # [0, 1] 因为 2+7=9
```

## 1.3 Set (集合)

**什么是集合?**
- 无序、不重复的元素集合
- 查找、插入、删除都是 O(1)
- 用于去重、判断元素是否存在

```python
# 创建集合
s = set()
s = {1, 2, 3}
s = set([1, 2, 2, 3])  # 自动去重 -> {1, 2, 3}

# 添加/删除
s.add(4)
s.remove(1)  # 不存在会报错
s.discard(1)  # 不存在不报错

# 判断存在 - O(1)
if 2 in s:
    print("存在")

# 集合运算
a = {1, 2, 3}
b = {2, 3, 4}
print(a & b)  # 交集: {2, 3}
print(a | b)  # 并集: {1, 2, 3, 4}
print(a - b)  # 差集: {1}
```

**典型应用: Contains Duplicate (包含重复)**
```python
def contains_duplicate(nums):
    """判断数组是否有重复元素"""
    return len(nums) != len(set(nums))

# 或者
def contains_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False
```

---

# 📚 第二部分: 基础算法模板 (3小时)
# Part 2: Basic Algorithm Templates

## 2.1 Two Pointers (双指针)

**什么时候用双指针?**
- 数组/字符串问题
- 需要比较两个位置的元素
- 排序数组找配对

**模板1: 相向双指针**
```python
def two_sum_sorted(nums, target):
    """
    nums已排序，找两个数和等于target
    思路: 左右指针向中间靠拢
    """
    left, right = 0, len(nums) - 1
    
    while left < right:
        current_sum = nums[left] + nums[right]
        
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1   # 和太小，左指针右移
        else:
            right -= 1  # 和太大，右指针左移
    
    return []
```

**模板2: 同向双指针 (快慢指针)**
```python
def remove_duplicates(nums):
    """
    原地删除排序数组中的重复元素
    返回新长度
    """
    if not nums:
        return 0
    
    slow = 0  # 慢指针: 指向不重复部分的末尾
    
    for fast in range(1, len(nums)):  # 快指针: 遍历数组
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
    
    return slow + 1
```

## 2.2 Sliding Window (滑动窗口)

**什么时候用滑动窗口?**
- 子数组/子字符串问题
- 连续元素
- 固定或可变长度的窗口

**模板: 可变窗口**
```python
def max_subarray_sum_k(nums, k):
    """
    找长度为k的子数组的最大和
    """
    n = len(nums)
    if n < k:
        return 0
    
    # 初始化第一个窗口
    window_sum = sum(nums[:k])
    max_sum = window_sum
    
    # 滑动窗口
    for i in range(k, n):
        window_sum = window_sum + nums[i] - nums[i - k]  # 加新的，减旧的
        max_sum = max(max_sum, window_sum)
    
    return max_sum
```

---

# 📚 第三部分: Binary Search (二分查找) ⭐必考⭐
# Part 3: Binary Search (MUST KNOW!)

## 3.1 基础二分查找

**核心思想:** 每次排除一半的选项
**前提:** 数组必须有序

```python
def binary_search(nums, target):
    """
    在有序数组中查找target
    找到返回索引，找不到返回-1
    时间: O(log n)
    """
    left, right = 0, len(nums) - 1
    
    while left <= right:  # 注意: <=
        mid = (left + right) // 2  # 或 left + (right - left) // 2 防溢出
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1   # 目标在右边
        else:
            right = mid - 1  # 目标在左边
    
    return -1

# 例子
nums = [1, 3, 5, 7, 9, 11]
print(binary_search(nums, 7))  # 输出: 3
print(binary_search(nums, 6))  # 输出: -1
```

## 3.2 二分查找变体

### 找第一个 >= target 的位置 (Lower Bound)
```python
def lower_bound(nums, target):
    """
    找第一个 >= target 的位置
    如果都小于target，返回len(nums)
    """
    left, right = 0, len(nums)
    
    while left < right:  # 注意: <
        mid = (left + right) // 2
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid
    
    return left
```

### 找第一个 > target 的位置 (Upper Bound)
```python
def upper_bound(nums, target):
    """
    找第一个 > target 的位置
    """
    left, right = 0, len(nums)
    
    while left < right:
        mid = (left + right) // 2
        if nums[mid] <= target:
            left = mid + 1
        else:
            right = mid
    
    return left
```

### 找target的第一个和最后一个位置
```python
def search_range(nums, target):
    """
    LeetCode 34: 在排序数组中查找元素的第一个和最后一个位置
    """
    def find_first(nums, target):
        left, right = 0, len(nums) - 1
        result = -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                result = mid
                right = mid - 1  # 继续往左找
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return result
    
    def find_last(nums, target):
        left, right = 0, len(nums) - 1
        result = -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                result = mid
                left = mid + 1  # 继续往右找
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return result
    
    return [find_first(nums, target), find_last(nums, target)]
```

## 3.3 二分查找应用题

### 搜索旋转排序数组
```python
def search_rotated(nums, target):
    """
    LeetCode 33: 搜索旋转排序数组
    [4,5,6,7,0,1,2] 中找 target
    """
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        
        # 判断哪边是有序的
        if nums[left] <= nums[mid]:  # 左边有序
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:  # 右边有序
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    
    return -1
```

### 求平方根
```python
def sqrt(x):
    """
    LeetCode 69: 求x的平方根(取整)
    """
    if x < 2:
        return x
    
    left, right = 1, x // 2
    
    while left <= right:
        mid = (left + right) // 2
        if mid * mid == x:
            return mid
        elif mid * mid < x:
            left = mid + 1
        else:
            right = mid - 1
    
    return right  # 返回right是向下取整
```

---

# 📚 第四部分: BFS/DFS基础 (3小时)
# Part 4: BFS/DFS Basics

## 4.1 BFS (广度优先搜索)

**什么时候用BFS?**
- 找最短路径
- 层级遍历
- 从一个点扩散到周围

**模板:**
```python
from collections import deque

def bfs(graph, start):
    """
    BFS模板
    graph: 邻接表 {node: [neighbors]}
    """
    visited = set([start])
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        print(node)  # 处理当前节点
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

### Number of Islands (岛屿数量) - 经典BFS
```python
def num_islands(grid):
    """
    LeetCode 200: 计算岛屿数量
    '1' 是陆地, '0' 是水
    """
    if not grid:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    count = 0
    
    def bfs(r, c):
        queue = deque([(r, c)])
        grid[r][c] = '0'  # 标记为已访问
        
        while queue:
            row, col = queue.popleft()
            
            # 四个方向
            for dr, dc in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
                nr, nc = row + dr, col + dc
                
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == '1':
                    grid[nr][nc] = '0'
                    queue.append((nr, nc))
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                bfs(r, c)
    
    return count
```

## 4.2 DFS (深度优先搜索)

**什么时候用DFS?**
- 需要遍历所有路径
- 回溯问题
- 树的遍历

**模板 (递归):**
```python
def dfs(graph, node, visited):
    """
    DFS模板 (递归)
    """
    visited.add(node)
    print(node)
    
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
```

### Number of Islands (DFS版本)
```python
def num_islands_dfs(grid):
    """DFS版本"""
    if not grid:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    count = 0
    
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0':
            return
        
        grid[r][c] = '0'  # 标记已访问
        
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    
    return count
```

---

# 📚 第五部分: LeetCode必刷题 (按难度)
# Part 5: Must-Do LeetCode Problems

## Easy (简单) - 必须熟练

| # | 题目 | 类型 | 重要性 |
|---|------|------|--------|
| 1 | Two Sum | Hash Map | ⭐⭐⭐⭐⭐ |
| 704 | Binary Search | Binary Search | ⭐⭐⭐⭐⭐ |
| 35 | Search Insert Position | Binary Search | ⭐⭐⭐⭐⭐ |
| 217 | Contains Duplicate | Hash Set | ⭐⭐⭐⭐ |
| 242 | Valid Anagram | Hash Map | ⭐⭐⭐⭐ |
| 206 | Reverse Linked List | Linked List | ⭐⭐⭐ |
| 21 | Merge Two Sorted Lists | Linked List | ⭐⭐⭐ |
| 121 | Best Time to Buy Stock | Array | ⭐⭐⭐⭐ |
| 125 | Valid Palindrome | Two Pointers | ⭐⭐⭐ |
| 69 | Sqrt(x) | Binary Search | ⭐⭐⭐⭐ |

## Medium (中等) - 要会

| # | 题目 | 类型 | 重要性 |
|---|------|------|--------|
| 33 | Search in Rotated Array | Binary Search | ⭐⭐⭐⭐⭐ |
| 34 | Find First and Last Position | Binary Search | ⭐⭐⭐⭐⭐ |
| 56 | Merge Intervals | Sorting | ⭐⭐⭐⭐ |
| 200 | Number of Islands | BFS/DFS | ⭐⭐⭐⭐⭐ |
| 3 | Longest Substring Without Repeat | Sliding Window | ⭐⭐⭐⭐ |
| 146 | LRU Cache | Hash Map + LinkedList | ⭐⭐⭐⭐ |
| 15 | 3Sum | Two Pointers | ⭐⭐⭐ |
| 153 | Find Minimum in Rotated Array | Binary Search | ⭐⭐⭐⭐ |

---

# 📚 第六部分: ML相关编程
# Part 6: ML-Related Coding

## Gradient Descent (梯度下降)
```python
def gradient_descent(x0, learning_rate=0.1, max_iter=100):
    """
    最小化 f(x) = x^2
    梯度: f'(x) = 2x
    """
    x = x0
    
    for i in range(max_iter):
        gradient = 2 * x  # f'(x) = 2x
        x = x - learning_rate * gradient
        
        if abs(gradient) < 1e-6:
            break
    
    return x

print(gradient_descent(10))  # 应该接近 0
```

## K-Nearest Neighbors (k近邻)
```python
import numpy as np
from collections import Counter

def knn(X_train, y_train, x_test, k=3):
    """
    k近邻分类
    """
    distances = []
    
    for i, x in enumerate(X_train):
        dist = np.sqrt(np.sum((x - x_test) ** 2))  # 欧氏距离
        distances.append((dist, y_train[i]))
    
    distances.sort()
    k_nearest = distances[:k]
    
    labels = [label for _, label in k_nearest]
    return Counter(labels).most_common(1)[0][0]
```

## Softmax
```python
def softmax(x):
    """数值稳定的softmax"""
    x = x - np.max(x)  # 防止溢出
    exp_x = np.exp(x)
    return exp_x / np.sum(exp_x)
```

---

# 📚 第七部分: 面试技巧
# Part 7: Interview Tips

## 面试流程 (1小时)

| 时间 | 你应该做什么 |
|------|-------------|
| 0-5分钟 | 听题目，问clarifying questions |
| 5-10分钟 | 说出你的思路，**写代码之前先说** |
| 10-40分钟 | 写代码，边写边解释 |
| 40-50分钟 | 测试代码，分析复杂度 |
| 50-60分钟 | 提问环节 |

## 重要的话术

### 开始前说:
> "Let me make sure I understand the problem correctly..."
> "Can I assume the input is valid?"
> "What should I return if...?"

### 开始写代码前说:
> "I'm thinking of using [hash map / binary search / BFS]..."
> "This approach would be O(n) time and O(n) space"
> "Does this approach sound reasonable?"

### 写代码时说:
> "Here I'm using a hash map to store..."
> "This loop iterates through all elements..."

### 写完后说:
> "Let me trace through with an example..."
> "Time complexity is O(n), space is O(n)"
> "Edge cases I'd handle: empty array, single element..."

## 卡住时怎么办

1. **说出来**: "I'm thinking about how to..."
2. **简化问题**: "Let me first solve a simpler version..."
3. **问提示**: "Could you give me a hint on the approach?"
4. **暴力解**: "I can think of a brute force O(n²) solution first..."

---

# ✅ 最后的检查清单 / Final Checklist

## 数据结构
- [ ] Array操作: 遍历, append, pop, slice
- [ ] Hash Map: 创建, 查找, 遍历
- [ ] Set: 创建, 查找, 去重

## 算法模板
- [ ] Two Sum (Hash Map)
- [ ] Binary Search (基础 + 变体)
- [ ] Two Pointers
- [ ] BFS/DFS (Number of Islands)

## ML编程
- [ ] Gradient Descent
- [ ] Softmax
- [ ] k-NN

## 面试技巧
- [ ] 先说思路再写代码
- [ ] 边写边解释
- [ ] 分析时间空间复杂度

---

# 🎯 最重要的一句话

> **SDE I bar只要"meet"，不需要"raise"。你做过AERO、发过ICLR，这些比coding难多了。相信自己!**

> **They want you to succeed. Just communicate your thoughts clearly.**

---

**Good luck! 加油! 💪**
