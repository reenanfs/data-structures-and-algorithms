# Binary Search Tree (BST)

A Binary Search Tree (BST) is a type of binary tree where each node has at most two child nodes: a left child and a right child. The BST property ensures that for each node:

1. All nodes in the left subtree have values less than the node's value.
2. All nodes in the right subtree have values greater than the node's value.

This property facilitates efficient searching, insertion, and deletion operations in logarithmic time complexity.

## Structure

In a Binary Search Tree, each node contains the following components:

- **Value**: The value or data to be stored.
- **Left Child**: A reference to the left child node (with a smaller value).
- **Right Child**: A reference to the right child node (with a larger value).

The basic structure of a Binary Search Tree can be visualized as follows:

            50
          /    \
        30     70
       /  \   /   \
     20  40  60   80

Here, the root node has a value of 50, with a left child of 30 and a right child of 70. The nodes with values 20, 40, 60, and 80 form the subtrees.

## Operations

A Binary Search Tree supports various operations that take advantage of its BST property:

### Insertion

To insert a new value into a BST, start from the root node and traverse the tree based on comparisons with the existing nodes' values. If the value is less than the current node, move to the left child; if it's greater, move to the right child. Repeat this process until an appropriate empty spot is found, and then insert the new node.

### Searching

BSTs excel at searching due to their structure. To search for a value, start at the root and follow comparisons to the left or right child nodes until the value is found or the tree is exhausted.

### Deletion

Deleting a node in a BST involves three main scenarios:

1. **Node with No Children**: Simply remove the node.
2. **Node with One Child**: Replace the node with its child.
3. **Node with Two Children**: Replace the node with its in-order successor (smallest node in the right subtree) or in-order predecessor (largest node in the left subtree).

### Traversal

Traversal in a BST involves visiting nodes in a specific order:

1. **In-Order Traversal**: Traverse the left subtree, visit the current node, traverse the right subtree. This results in values in ascending order.
2. **Pre-Order Traversal**: Visit the current node, traverse the left subtree, traverse the right subtree.
3. **Post-Order Traversal**: Traverse the left subtree, traverse the right subtree, visit the current node.
4. **Breadth-First Traversal (Level-Order)**: Visit nodes level by level, starting from the root.

## Use Cases

BSTs find applications in various scenarios that require efficient searching, insertion, and deletion:

- **Database Indexing**: BSTs are used in database indexing to quickly locate records based on key values.
- **File System Organization**: BSTs can be used to organize files and directories for efficient searching.
- **Auto-Complete Suggestions**: BSTs can be used to suggest auto-complete options based on user input.
- **Priority Queues**: BSTs can be used to implement priority queues, where the node with the highest priority value is easily accessible.

## Time Complexity

The time complexity of operations in a balanced Binary Search Tree is as follows:

- Insertion: Average O(log n), Worst Case O(n) if the tree becomes skewed.
- Searching: Average O(log n), Worst Case O(n) if the tree becomes skewed.
- Deletion: Average O(log n), Worst Case O(n) if the tree becomes skewed.
- Traversal: O(n) to visit all nodes.

## Space Complexity

The space complexity of a Binary Search Tree is O(n), where n is the number of nodes in the tree. Each node requires space for its value and references to its children.

## Types of Binary Trees

There are various types of binary trees, including:

- **Binary Search Tree (BST)**: Each node follows the BST property.
- **Balanced Binary Tree**: A binary tree where the height is kept balanced to ensure efficient operations.
- **Heap**: A binary tree with specific ordering properties used in priority queues.
- **Binary Expression Tree**: A binary tree used to represent expressions for evaluation.

## Conclusion

Binary Search Trees offer a powerful data structure for efficient searching, insertion, and deletion operations. Their hierarchical structure and ordered property make them valuable in various applications that require quick access to data based on comparisons. However, care must be taken to ensure the tree remains balanced to avoid performance degradation in worst-case scenarios.

Remember that the efficiency of operations in a Binary Search Tree heavily relies on maintaining its balanced nature, which can be achieved through self-balancing techniques like AVL trees and Red-Black trees.

This document provides a high-level overview of Binary Search Trees and their properties. For detailed implementation and further exploration, refer to the provided BST implementation and associated test cases.
