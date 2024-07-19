# Radix Sort Algorithm

## Introduction

Radix Sort is a non-comparative sorting algorithm that sorts numbers or strings by processing individual digits or characters. It works by distributing the numbers into buckets based on their digits or characters, and then concatenating the buckets to form a sorted list. This algorithm is efficient for sorting large datasets with integers or strings.

## How It Works

1. **Determine the Maximum Number**: Find the maximum number in the list to know the number of digits.
2. **Sorting by Each Digit**: Start with the least significant digit and use a stable sorting algorithm (such as Counting Sort) to sort the list based on this digit.
3. **Move to the Next Digit**: Move to the next significant digit and repeat the sorting process until all digits have been processed.
4. **Concatenate the Buckets**: After sorting by all digits, concatenate the buckets to obtain the sorted list.

## Performance

**Time Complexity:**
- Worst-case: O(nk), where `n` is the number of elements and `k` is the number of digits.
- Average-case: O(nk)
- Best-case: O(nk)

**Space Complexity:** O(n + k), where `n` is the number of elements and `k` is the number of digits.

## Pros and Cons

### Pros:
- Efficient for sorting large lists of integers or strings.
- Performs well when the range of digits is not significantly larger than the number of elements.

### Cons:
- Not suitable for floating-point numbers or large ranges of integers.
- Requires additional space for storing buckets.

## Conclusion

Radix Sort is an effective algorithm for sorting integers or strings, especially when the number of digits is relatively small compared to the number of elements. Its linear time complexity makes it suitable for large datasets, but it may not be efficient for all types of data, such as floating-point numbers or very large numerical ranges. For such cases, other algorithms like Quick Sort or Merge Sort might be preferable.
