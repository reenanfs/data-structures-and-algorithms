# Selection Sort Algorithm

## Introduction

Selection Sort is a simple comparison-based sorting algorithm. It works by repeatedly selecting the smallest (or largest, depending on sorting order) element from the unsorted portion of the list and swapping it with the first unsorted element. This process continues until the entire list is sorted. Like Bubble Sort, Selection Sort is often used for educational purposes due to its straightforward implementation.

## How It Works

1. **Find the Minimum**: The algorithm starts by finding the smallest element in the unsorted portion of the list.
2. **Swap**: Once the smallest element is found, it is swapped with the first unsorted element.
3. **Move Boundary**: The boundary between the sorted and unsorted portions of the list is then moved one element to the right.
4. **Repeat**: Steps 1-3 are repeated until the entire list is sorted.

## Performance

**Time Complexity:**
- Worst-case: O(n²)
- Average-case: O(n²)
- Best-case: O(n²) (even if the array is already sorted, it still makes n² comparisons)

**Space Complexity:** O(1) (in-place sorting)

## Pros and Cons

### Pros:
- Simple to understand and implement.
- Does not require additional memory.
- Performs well on small datasets.

### Cons:
- Inefficient for large datasets compared to more advanced algorithms like Quick Sort or Merge Sort.
- High time complexity (O(n²)) in all cases.
- Not stable (does not maintain the relative order of equal elements).

## Conclusion

Selection Sort is a straightforward sorting algorithm that is easy to understand and implement. It is useful for small datasets or for teaching purposes. However, it is not suitable for large datasets due to its inefficiency compared to more advanced sorting algorithms.
