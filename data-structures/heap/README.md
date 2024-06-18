# Heap

A heap is a specialized tree-based data structure that satisfies the heap property. Heaps are commonly implemented as binary trees, where the key at each node is either greater than or less than (depending on whether it's a max heap or min heap) the keys of its children.

## Structure

A heap is structured as a binary tree with two main properties:

- **Shape Property**: A heap is a complete binary tree, which means all levels of the tree are fully filled except possibly for the last level, which is filled from left to right.
- **Heap Property**: In a max heap, for any given node C with parent P, the key of P is greater than or equal to the key of C. In a min heap, the key of P is less than or equal to the key of C.

Here's how a max heap might look:

         90
       /    \
     85      87
    /  \    /  \

72 45 80 30
/ \
20 10

In this example:

- Each parent node has keys greater than or equal to its children (max heap property).
- The tree is complete, with nodes filled from left to right at each level.

## Operations

Heaps support efficient insertion, deletion (usually of the root), and access operations. Here are the key operations:

### Insertion

Insertion involves adding a new element to the heap while maintaining the heap properties:

1. **Bubble-Up**: After inserting a new element at the bottom (rightmost spot), it's compared with its parent; if they violate the heap property, they swap positions. This process continues until the heap property is restored.

### Deletion (Extraction)

Deletion in heaps typically removes the root element:

1. **Sink-Down**: The root (topmost element) is removed and replaced with the last element in the heap (the bottommost, rightmost element). The new root is compared with its children; if they violate the heap property, they swap positions. This process continues until the heap property is restored.

### Peek (Access)

Peek operation retrieves the root element (max or min depending on the heap type) without removing it from the heap.

## Types of Heaps

- **Max Heap**: Every parent node has a value greater than or equal to any of its children nodes.
- **Min Heap**: Every parent node has a value less than or equal to any of its children nodes.

## Use Cases

Heaps are widely used for priority queue implementations due to their efficient operations:

- **Priority Queues**: Heaps are used in scenarios where elements with higher priorities need to be served before elements with lower priorities. An example would be job scheduling.

## Real Examples of Use

- **Priority Queue in Operating Systems**: Used for scheduling tasks with different priorities.
- **Heap Sort Algorithm**: Uses a max heap to sort elements in ascending order.

## Time Complexity

- **Insertion**: O(log n)
- **Deletion**: O(log n)
- **Peek (Access)**: O(1)

## Space Complexity

- **Space Complexity**: O(n)

The space complexity of a heap depends on the number of elements stored in the heap.

**Note**: This file is a living document and will be updated as I continue to learn more about heaps and enhance my understanding.
