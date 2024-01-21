---
layout: post-index
permalink: /downloads/research/epd/
title: Statistical inforcence for Epidemiology
tagline: epd
tags: [epd]
comments: false
---

**Dynamic Patterns and Predictors of Hydroxychloroquine Nonadherence Among Medicaid Beneficiaries with Systemic Lupus Erythematosus.**  
Candace H. Feldman, Jamie Collins, **Zhi Zhang**, S. V. Subramanian, Daniel H. Solomon, Ichiro Kawachi, Karen H. Costenbader.  
*Seminars in Arthritis and Rheumatism, WB Saunders, 2018.* [pubMed](https://pubmed.ncbi.nlm.nih.gov/29458974/)  

<br>  

**Azathioprine and Mycophenolate Mofetil Adherence Patterns and Predictors Among Medicaid Beneficiaries with Systemic Lupus Erythematosus.**  
Candace H Feldman, Jamie Collins, **Zhi Zhang**, Chang Xu, S. V. Subramanian, Ichiro Kawachi, Daniel H Solomon, Karen H Costenbader.  
*Arthritis Care & Research, 2019.* [pubMed](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6482109/)  

<br>

**Association of Weight Loss with Improved Disease Activity in Patients with Rheumatoid Arthritis: A Retrospective Analysis Using Electronic Medical Record Data.**  
David J. Kreps, Florencia Halperin, Sonali P. Desai, **Zhi Zhang**, Elena Losina, Amber T. Olson, Elizabeth W. Karlson, Bonnie L. Bermas, Jeffrey A. Sparks.  
*International Journal of Clinical Rheumatology 13, no. 1 (2018): 1.* [pubMed](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5875117/)  

<br>

**Diet and Rheumatoid Arthritis Symptoms: Survey Results from a Rheumatoid Arthritis Registry.**  
SK Tedeschi, M Frits, J Cui, **Zhi Zhang**, T Mahmoud, C Iannaccone, TC Lin, K Yoshida, ME Weinblatt, NA Shadick, DH Solomon.  
*Arthritis Care & Research. 2017 Dec 1;69(12):1920-5.* [pubMed](https://pubmed.ncbi.nlm.nih.gov/28217907/)  

<br>

**Pain Sensitization is Associated with Disease Activity in Rheumatoid Arthritis Patients: A Cross-Sectional Study.**  
Yvonne C Lee, Clifton O Bingham III, Robert R Edwards, Wendy Marder, Kristine Phillips, Marcy B Bolster, Daniel J Clauw, Larry W Moreland, Bing Lu, Alyssa Wohlfahrt, **Zhi Zhang**, Tuhina Neogi.  
*Arthritis Care & Research. 2017 Apr 24.* [pubMed](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5654691/)  

<br>

**Association Between Pain Sensitization and Disease Activity in Patients with Rheumatoid Arthritis: A Cross-Sectional Study.**  
Yvonne C Lee, Clifton O Bingham III, Robert R Edwards, Wendy Marder, Kristine Phillips, Marcy B Bolster, Daniel J Clauw, Larry W Moreland, Bing Lu, Alyssa Wohlfahrt, **Zhi Zhang**, Tuhina Neogi.  
*Arthritis Care & Research, 2018.* [pubMed](https://pubmed.ncbi.nlm.nih.gov/28437846/)  

<br>

**Direct Medical Costs for Medicare Patients with Rheumatoid Arthritis.**  
Andrew Hresko, **Zhi Zhang**, Joshua Colls, Michael E Weinblatt, Nancy A. Shadick, Daniel Solomon.  
*2018 ACR/ARHR Annual Meeting.* [link](https://acrabstracts.org/abstract/direct-medical-costs-for-medicare-patients-with-rheumatoid-arthritis/)  

<br>

**Whole Genome Association Study of Gout in Patients with Hyperuricemia Identified Many Possible New Candidate Risk Alleles.**  
Jing Cui, **Zhi Zhang**, Elizabeth Karlson, Daniel Solomon.  
*2017 ACR/ARHP Annual Meeting.* [link](https://acrabstracts.org/abstract/gwas-of-gout-in-patients-with-hyperuricemia-identified-many-possible-new-candidate-risk-alleles/)  

<br>

**Identification of Clinically Relevant Pain Profiles in Individuals with Active RA.**  
Alyssa Wohlfahrt, **Zhi Zhang**, Bing Lu, Clifton O. Bingham III, Marcy B. Bolster, Wendy Marder, Larry W. Moreland, Kristine Phillips, Tuhina Neogi, Yvonne C. Lee.  
*2017 ACR/ARHP Annual Meeting.* [link](https://acrabstracts.org/abstract/identification-of-clinically-relevant-pain-profiles-in-individuals-with-active-ra/)  

<br>

**Prevalence of Cytopenias Associated with Low-Dose Methotrexate and Folic Acid Among Patients with RA: A Systematic Review and Meta-Analysis.**  
Katheeln Vinny, **Zhi Zhang**, Danial Soloman.  
*2017 ACR/ARHP Annual Meeting.* [link](https://acrabstracts.org/abstract/hematologic-abnormalities-during-the-use-of-low-dose-methotrexate-for-rheumatoid-arthritis-a-systematic-review-and-meta-analysis/)  






{% for post in site.categories.miscellaneous %}
<!--
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != year_previous %}
  <h2>{{ post.date | date: '%Y' }}</h2>
  {% endif %}
  {% capture year_previous %}{{ post.date | date: '%Y' }}{% endcapture %}
-->
  <h3><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></h3>
  <p><i><small>Posted: {{ post.date | date: "%B %-d, %Y"}} Updated: {{ post.modified | date: "%B %-d, %Y"}}</small></i></p>
  {% if post.image.teaser %}
  <figure>
    <a href="{{ site.url }}{{ post.url }}"><img src="{{ site.url }}{{ post.image.teaser }}"></a>
  </figure>
  {% endif %}
  <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>

{% endfor %}

