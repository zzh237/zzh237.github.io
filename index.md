---
layout: home2
title: Zach Zhang
description: "Zach Zhang's Website"
tags: [Jekyll, theme, responsive, blog, template]
image:
  feature: /images/website_images/beijing.jpg
---

<br />

<div class = "titled-image">
<figure class = "titled-image">
    <img src = "{{ site.url }}/images/author_images/Zach-Zhang-Yellowstone.jpg" width="189" height="252">
    <figcaption>Zach Zhang at Yellowstone in 2017</figcaption>
</figure>
</div>


### Who am I

I am a working professional as a Data Scientist and currently I am pursuing a CS-MS in Georgia Tech. My specialization is <b>Machine Learning</b> and <b>Computational Perception</b>.

<br />



### Career Goal

I was original studying Agricultural related science in University of Kentucky and China Agricultural University. At the same time, I have sincere love for math, programming, and engineering, so I worked several years as Data Scientist and Engineer in the industry, now I am pursuing the Computer Science master degree in Georgia Tech, I should be thankful that I have learned math and programming well in college and during my years of working experience, and I met computer science when I was at the lowest point of my life. I hope I can further develop solid skills in this field, enjoy every step of learning. 

<br />

With the help from MOOC, I was able to quickly catch up. I have done a good number of elementary machine learning, deep learning, artificial intelligence and data science projects independently. So I would like to challenge myself more by doing some state-of-art machine learning and artificial intelligence researches. I am currently seeking machine learning and artificial intelligence research opportunities not only in the Georgia Tech but also in the other areas in the United States.

### Projects

#### Data engineer, productional algorithm development and implementation, and data web visualization: 
I am also a full time Data Scientist for <a href="http://www.seluxdx.com/">SeLux Diagnostics Inc</a>, a biotechnology company, where the team were building 
the next generation high throughput FDA required antibiotic susceptibility testing (“AST”) device for clinical labs to run AST test for infectious disease efficiently
and precisely. Quite amount of data were generated from bio-experiments, chemical-experiments, device running, patient samples, I used <b>OOP</b> to capture those information 
from various objects such as physical device parameter, microbiological plates incubation result, chemical reagents fluorescence value, bacterial genera, 
drug concentration, patient record, then built their relationship, and then developed and applied machine learning algorithms (<b>Kernel Bayes, XGB, hmm, Bayes nets with Chow-Liu algorithm, conditional random fields, 
and deep learning LSTM</b>) to do different predication, such as minimum antibiotic susceptible concentration for different sample, and built a multi-functional software 
to embed the algorithms into the system of device for seamlessly device running and <b>algorithm training, testing, and web-visualization</b> using the <b>multi-threads pipe</b> and 
<b>ASP.NET web service</b> to communicate data between device, database, and algorithm development platform (such as python, tensorflow, Matlab, R)<a href="https://github.com/zzh237/SeLux">(github).</a>

<figure>
  <img src="/images/projects/selux/Capture0.PNG" width="524" height="350">
</figure>
<figure>
  <img src="/images/projects/selux/Capture.PNG" width="424" height="300">
</figure>
<figure>
  <img src="/images/projects/selux/Capture2.PNG" width="424" height="300">  
</figure>

#### Machine Learning course projects: 

Georgia Tech’s CS7641 ML class has four fairly involved projects. <a href ="https://drive.google.com/open?id=1CKulfMYYOr_cs86v48-KcSf8QiytfbHO">supervised learning</a>, <a href ="https://drive.google.com/open?id=1jMAsi-wVYdruQQTWWGKeoFV9NzBmCvda">randomized optimization</a>, <a href ="https://drive.google.com/open?id=1ywQx8xkWuFNqYK2NYOw2Pdddl9NkRLVP">unsupervised learning</a>, and <a href ="https://drive.google.com/open?id=1cd3hXTwb1pvLT8AO-PiUOTGLStOIsDBA">Markov Decision Processes</a>. 

<br />

#### Computer Vision: MHI for behavior recognition 
Activity classification using MHI: In class project, I classified different human movements behavior by training video data containing multiple human movements, 
using the motion history image stack to represent the video data, performed background subtraction, motion history images moments calculation, 
and applied different classifiers to train the image moments, then predicated the human behavior from real-world video [<a href ="https://drive.google.com/open?id=1bePGRlxUlnrkpv3T5gDZI4h4d5zAr9bv">PDF</a>].  

<figure>
  <img src="/images/projects/mhi/mhi.png" width="700" height="400">  
  <figcaption> motion history images</figcaption>
</figure>
<figure>
  <img src="/images/projects/mhi/pred.png" width="700" height="400">  
  <figcaption> capture of real moving prediction </figcaption>
</figure>
<figure>
  <img src="/images/projects/mhi/cm.png" width="400" height="420">  
  <figcaption> confusion matrix </figcaption>
</figure>


<br />

<br />
#### Bayes Nets with Chow-Liu to do multi-classification of photos:

I collected data from instagram photos of five national parks. I then trained up a classifier that correctly predicts the park from a photo. This is a non-trivial task, since naive approach -- using each pixel as a feature -- will fail. To see why consider the two photos below.
<figure>
  <img src="/images/projects/bn-chowliu/intro.PNG" width="304" height="180">  
</figure>
Landmark occurs in both photos but not in the same position in the image. Further due to the opening in the arch, middle of the photo may be occupied by sky or rock. At best, treating pixels as feature we can analyze image in terms of color frequencies -- how intense are the red, green and blue channel.

Instead of using each pixel as a feature, I used features -- computed by a neural network -- which aggregate information about edges, shapes, and color intensities across the whole image to do prediction.
I trained a prediction model which takes distilled representation of the photos, 1000 features per picture, and predicts where the photo was taken. 
I modeled features in the dataset using Bayesian networks, one for each class -- natural park. I implement learning of the tree structure for each class using Chow-Liu algorithm, then
I used the tree structure to learn parameters for conditional probabilities associated with edges in these trees, then 
I computed probability of a feature vector xx in each of the five Bayesian networks, then I computed probabilities that the feature vector xx belongs to each class, then I made predictions based on probabilities (1pt)
and explored prediction performance. 

<figure>
  <img src="/images/projects/bn-chowliu/cm.png" width="350" height="330">  
  <figcaption> confusion matrix</figcaption>
</figure>
<figure>
  <img src="/images/projects/bn-chowliu/res.png" width="400" height="420">  
  <figcaption> incorrect predicted photo </figcaption>
</figure>

<br />
#### AI for Robotics project:
Simulated Intelligent Robot Tracking Agent: in course project, I developed a naive intelligent agent to predict the future trajectory of a Nano robot’s dynamic moving position; 
evaluated multiple training algorithms in Bayesian probabilistic model, linear-Gaussian model (Kalman Filters), sequential Monte Carlo simulation (particle filters), 
residual learning model; reduced video data dimensionality by PCA; tuned residual neural network hyperparameters 
and applied bootstrap aggregation with multiple residual neural networks [<a href ="https://drive.google.com/open?id=1h349nlaTj-p_aJAxRO1wWl6PvWtd7ose">PDF</a>].
<figure>
  <img src="/images/projects/ai4r/predictions_cropped.png" alt="The Pulpit Rock" width="304" height="180">  
</figure>
<figure>
<img src="/images/projects/ai4r/sample_predictions.png" alt="The Pulpit Rock" width="304" height="180">
</figure>

<br />

#### Deep Q-Networks:
I implemented Deep Q-networks using tensorflow to solve the LunarLander problem in the OpenGym AI. Three different techniques were applied to improve the performance of deep Q-Networks, which are <a href ="https://arxiv.org/pdf/1509.06461.pdf">double deep Q-Networks</a>, 
<a href ="https://arxiv.org/pdf/1511.06581.pdf">dueling deep Q-Networks</a>, and <a href ="https://arxiv.org/pdf/1511.05952.pdf">prioritized experience replay</a>. The scores per episode were compared [<a href ="https://drive.google.com/open?id=1sDkJUoM2ZCd9DocFZo8siLoN_U7iI32J">PDF</a>].     
<figure>
  <img src="/images/projects/lunarlander/algo_compare_per_ep.png" width="304" height="180">
</figure>
<figure>
  <img src="/images/projects/lunarlander/episode_0.gif" width="304" height="180">  
  <figcaption> Episode 0 </figcaption>
</figure>
<figure>
  <img src="/images/projects/lunarlander/episode_3000.gif" width="304" height="180">  
  <figcaption> Episode 5000 </figcaption>
</figure>

<br/>

#### Business Analytics
- I was a data science consultant in <a href="https://www.linkedin.com/company/iknowtion/" target="_blank">TeleTech Insights</a> and <a href="https://www.linkedin.com/company/focuskpi-inc-/" target="_blank">FocusKPI</a> in 2013 and 2014, where I worked on multiple big data SaaS projects related to <b>customer behavior and marketing predicative modeling</b>, 
content based and collaborative filtering for item <b>recommendation</b> and latent semantic analysis, <b>time series</b> event customer life time value prediction using ARIMAX models and Markov chain, customer <b>classification, segmentation and clustering</b>. I performed hypothesis testing, algorithm application, prediction, 
and data visualization, built the algorithm training, testing and reporting software.  
<br /> 

<br/>

#### HealthCare Analytics
- I worked in Harvard Medical School and Brigham and Women's hospital division of clinical research in immunology, rheumatology, and pharmacoepidemiology for some projects related to <b>healthcare predicative modeling</b>, <b>NLP of doctor notes</b>, genome-wide association study <b>(GWAS)</b>, <b>EHR mining</b>, and developed tools and applications for scientists and doctors to easily store, processing, analyze and visualize data, with some paper produced, in 2015, 2016. 
   * Feldman, Candace H., Jamie Collins, <b>Zhi Zhang</b>, S. V. Subramanian, Daniel H. Solomon, Ichiro Kawachi, and Karen H. Costenbader. "Dynamic patterns and predictors of hydroxychloroquine nonadherence among medicaid beneficiaries with systemic lupus erythematosus." In Seminars in Arthritis and Rheumatism. WB Saunders, 2018. 
   * Lee YC, Bingham CO, Edwards RR, Marder W, Kristine P, Bolster MB, Clauw DJ, Moreland LW, Lu B, Wohlfahrt A, <b>Zhang Z.</b> Pain Sensitization is Associated with Disease Activity in Rheumatoid Arthritis Patients: A Cross‐Sectional Study. Arthritis care & research. 2017 Apr 24.
   * Kreps, David J., Florencia Halperin, Sonali P. Desai, <b>Zhi Z. Zhang</b>, Elena Losina, Amber T. Olson, Elizabeth W. Karlson, Bonnie L. Bermas, and Jeffrey A. Sparks. "Association of weight loss with improved disease activity in patients with rheumatoid arthritis: A retrospective analysis using electronic medical record data." International journal of clinical rheumatology 13, no. 1 (2018): 1.
   * Tedeschi SK, Frits M, Cui J, <b>Zhang ZZ</b>, Mahmoud T, Iannaccone C, Lin TC, Yoshida K, Weinblatt ME, Shadick NA, Solomon DH. Diet and rheumatoid arthritis symptoms: survey results from a rheumatoid arthritis registry. Arthritis care & research. 2017 Dec 1;69(12):1920-5.
<br /> 
<br/>

#### Computational Biology
- I was a Research Assistant in University of Kentucky UK bioinformatics microarray core facility, from 2011 – 2012, I used Microarray generated big genomic data to model the gene, RNA, protein regulatory pathway networks, applied PCA to do dimension reduction for expression data and I investigated the relationship between the gene expression networks and phenotype by statistical learning models
- I was a research assistant for computational analysis of gene regulation, genetic variation, and the computational <b>algorithm based inference of genome-transcriptome-phenome association</b> of patients’ neural stem cell in Peking University School of Basic Medicine Stem Cell Center, and used the nurses’ 10 years <b>longitudinal</b> data and genomic data to generalize association and inference by <b>PCA</b> analysis and <b>Proportional hazards model</b> analysis 
in Fudan University School of Public Health, in 2009 and 2010.

<br/>

<br/>
