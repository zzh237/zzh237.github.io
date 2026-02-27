# Amazon Applied Scientist Coding Interview Prep Guide

**Based on internal Amazon interview wikis and datapoints**

---

## 1. What the Coding Round Actually Tests (Internal Data)

From Amazon's internal Applied Scientist interview framework:

| Aspect | Requirement |
|--------|-------------|
| **Coding bar** | SDE I (NOT SDE II or higher) |
| **Focus** | Problem solving, logical & maintainable code |
| **Language** | Python is fine (candidates often use Python, R, MATLAB) |
| **Expectation** | "Meet the bar, not raise it" - scientists rarely raise coding bar |

**Why scientists rarely raise the coding bar (from internal wiki):**
1. They haven't coded heavily in research/academic settings
2. They focus on numerical problems, less data structure heavy
3. This is acknowledged and acceptable at Amazon

---

## 2. Two Types of Coding Questions for AS

### Type A: Standard Algorithms & Data Structures
From internal wikis - "Problem Solving (Algorithms and Data Structures)":
- Hash tables, arrays, strings
- Trees, graphs (BFS/DFS)
- Sorting, searching
- Basic DP

### Type B: ML-Related Coding ✨ (More Likely for AS)
From internal S9/AS interview question banks:

**These are actual internal AS coding questions:**

1. **Optimization** - Implement gradient descent
2. **Bootstrap** - Implement bootstrap sampling for confidence intervals
3. **Nearest Neighbors** - Implement k-NN from scratch
4. **Multivariate Gaussian** - Generate random samples
5. **Integral Image / Summed Area Table** - Efficient region sums

---

## 3. Specific ML Coding Questions to Practice

### Q1: Implement Gradient Descent
```python
def gradient_descent(f, grad_f, x0, learning_rate=0.01, max_iter=1000, tol=1e-6):
    """
    f: objective function
    grad_f: gradient function
    x0: initial point
    """
    x = x0
    for i in range(max_iter):
        grad = grad_f(x)
        x_new = x - learning_rate * grad
        if abs(f(x_new) - f(x)) < tol:
            break
        x = x_new
    return x

# Example: minimize f(x) = x^2
# grad_f(x) = 2x
```

**Follow-ups:**
- How to choose learning rate?
- What if gradient is noisy? (SGD)
- Convergence guarantees?

### Q2: Implement Bootstrap
```python
import numpy as np

def bootstrap_confidence_interval(data, statistic_fn, n_bootstrap=1000, ci=0.95):
    """
    Compute confidence interval using bootstrap
    """
    n = len(data)
    bootstrap_stats = []
    
    for _ in range(n_bootstrap):
        # Resample with replacement
        sample = np.random.choice(data, size=n, replace=True)
        stat = statistic_fn(sample)
        bootstrap_stats.append(stat)
    
    # Percentile method
    alpha = (1 - ci) / 2
    lower = np.percentile(bootstrap_stats, alpha * 100)
    upper = np.percentile(bootstrap_stats, (1 - alpha) * 100)
    
    return lower, upper

# Example: CI for mean
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
lower, upper = bootstrap_confidence_interval(data, np.mean)
```

### Q3: Implement K-Nearest Neighbors
```python
import numpy as np
from collections import Counter

def knn_classify(X_train, y_train, x_query, k=3):
    """
    K-nearest neighbors classification
    """
    # Compute distances
    distances = []
    for i, x in enumerate(X_train):
        dist = np.sqrt(np.sum((x - x_query) ** 2))  # Euclidean
        distances.append((dist, y_train[i]))
    
    # Sort and get k nearest
    distances.sort(key=lambda x: x[0])
    k_nearest = distances[:k]
    
    # Majority vote
    labels = [label for _, label in k_nearest]
    return Counter(labels).most_common(1)[0][0]
```

**Follow-ups:**
- Time complexity? O(n*d) for each query
- How to speed up? (KD-tree, ball tree)
- How to choose k? (cross-validation)

### Q4: Softmax Function
```python
def softmax(x):
    """Numerically stable softmax"""
    x_shifted = x - np.max(x)  # Numerical stability
    exp_x = np.exp(x_shifted)
    return exp_x / np.sum(exp_x)
```

### Q5: Cross-Entropy Loss
```python
def cross_entropy_loss(y_true, y_pred, epsilon=1e-15):
    """
    y_true: one-hot encoded labels (N, C)
    y_pred: predicted probabilities (N, C)
    """
    y_pred = np.clip(y_pred, epsilon, 1 - epsilon)  # Numerical stability
    return -np.mean(np.sum(y_true * np.log(y_pred), axis=1))
```

---

## 4. Standard Coding Questions (Also Possible)

From internal wikis, these are used for AS:

| Problem | Concepts |
|---------|----------|
| Two Sum | Hash map |
| Merge Intervals | Sorting |
| LRU Cache | Hash map + Doubly linked list |
| Search Suggestions | Trie |
| Number of Islands | BFS/DFS |

### Example: Two Sum
```python
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []
```

### Example: Merge Intervals
```python
def merge_intervals(intervals):
    if not intervals:
        return []
    
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for start, end in intervals[1:]:
        if start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    
    return merged
```

---

## 5. What They're NOT Testing (Internal Wiki)

> "Scientists are NOT expected to know how to architect/design full systems (engineering), RESTful interfaces, unit testing frameworks, or how to diagnose difficult scalability issues."

> "Scientists may put less emphasis on exception handling for cases such as malformed input."

**Translation:** Don't stress about:
- System design
- API design
- Complex OOP
- Edge case handling (as long as you mention them)

---

## 6. Interview Flow (1 hour)

| Time | Activity |
|------|----------|
| 0-5 min | Intro, clarifying questions |
| 5-10 min | Discuss approach BEFORE coding |
| 10-45 min | Code the solution |
| 45-55 min | Test with examples, discuss complexity |
| 55-60 min | Q&A |

**Key phrases to use:**
- "Let me make sure I understand the problem..."
- "I'll start with a simple approach, then optimize if needed"
- "This is O(n) time and O(n) space because..."
- "Edge cases I'd handle: empty input, duplicates..."

---

## 7. Your Preparation Plan

### Tonight (2-3 hours):
- [ ] Practice gradient descent implementation
- [ ] Practice bootstrap implementation
- [ ] Practice k-NN implementation
- [ ] Review softmax/cross-entropy

### Day of Interview:
- [ ] Warm up with 1 easy problem (Two Sum)
- [ ] Review your implementations from tonight
- [ ] Get good sleep!

---

## 8. Confidence Boosters

**From internal wikis:**
- "Candidates that do the best in coding tend to have worked in industry for a few years" - You have Amazon experience
- "The minimum requirement is to meet, not raise, the SDE I bar" - Not trying to make you fail
- "Scientists will likely be more comfortable with Python, R, MATLAB" - Your Python is fine

**Remember:**
- You published at ICLR, AISTATS, NeurIPS - you understand algorithms deeply
- You implemented AERO with complex RL training - you can code
- This is SDE I bar, not SDE III

**You've got this!**
