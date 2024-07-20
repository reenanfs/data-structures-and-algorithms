# Bubble Sort Algorithm

## Introduction

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted. Due to its simplicity, Bubble Sort is often used for educational purposes to introduce the concept of sorting algorithms.

## How It Works

1. **Pass Through the List**: The algorithm starts at the beginning of the list and compares each pair of adjacent elements.
2. **Swapping**: If a pair of elements is in the wrong order, they are swapped.
3. **Repeat**: This process repeats, with each pass through the list moving the next largest element to its correct position.
4. **Completion**: The algorithm continues until no more swaps are needed, indicating that the list is sorted.

## Performance

**Time Complexity:**
- Worst-case: O(n²)
- Average-case: O(n²)
- Best-case: O(n) (when the array is already sorted)

**Space Complexity:** O(1) (in-place sorting)

## Pros and Cons

### Pros:
- Simple to understand and implement.
- Does not require additional memory.
- Best-case performance is linear when the list is already sorted.

### Cons:
- Inefficient for large datasets compared to more advanced algorithms like Quick Sort or Merge Sort.
- High time complexity (O(n²)) in average and worst cases.

## Conclusion

Bubble Sort is an excellent algorithm for teaching and learning about sorting due to its simplicity. However, for large datasets, it is not suitable due to its inefficiency. More advanced algorithms should be considered for such use cases.

