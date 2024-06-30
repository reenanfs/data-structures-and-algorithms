# Search Algorithms

## Overview

Search algorithms are used to locate a specific item or set of items within a larger collection of data. These algorithms vary in efficiency and applicability based on the structure of the data being searched.

## Types of Search Algorithms

### Linear Search

Linear search is a straightforward algorithm that sequentially checks each element in a list until the desired element is found or the end of the list is reached.

- **Time Complexity:** O(n) in the worst case, where n is the number of elements in the list.
- **Space Complexity:** O(1) since it requires only a few variables for comparison.

### Binary Search

Binary search is a more efficient algorithm that works on sorted arrays by repeatedly dividing the search interval in half.

- **Time Complexity:** O(log n) in the worst case, where n is the number of elements in the array.
- **Space Complexity:** O(1) since it operates iteratively or recursively with a constant amount of extra space.

## Choosing the Right Search Algorithm

- **Use Linear Search**:

  - When the list is unordered or unsorted.
  - When the list is small or when the overhead of sorting is not worth it.

- **Use Binary Search**:
  - When the list is already sorted.
  - When searching in large datasets where efficiency is crucial.
