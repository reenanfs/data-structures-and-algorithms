# Tree

A tree is a hierarchical data structure that consists of nodes connected by edges. It is a collection of elements organized in a hierarchical manner, where each element is represented by a node, and the connections between nodes are represented by edges.

## Structure

A tree has the following components:

1. **Node**: Each node in a tree represents an element and contains some data along with a reference to its child nodes (if any).
2. **Edge**: The edges represent the connections between nodes. They define the relationships and hierarchy among the nodes.
3. **Root**: The topmost node of the tree is called the root. It serves as the starting point to access all other nodes in the tree.
4. **Parent**: A node that has child nodes is called a parent node. It is closer to the root and has edges pointing towards its child nodes.
5. **Child**: Nodes that are directly connected to a parent node are called child nodes.
6. **Leaf**: A node that has no child nodes is called a leaf node. It is located at the ends of the branches.
7. **Level**: The level of a node represents its distance from the root. The root is at level 0, its children are at level 1, and so on.
8. **Subtree**: A subtree is a tree that is part of the larger tree, consisting of a parent node and its descendants.

## Types of Trees

There are various types of trees, each with its unique characteristics and use cases:

1. **Binary Tree**: A binary tree is a tree in which each node has at most two children, typically referred to as the left child and the right child.

2. **Binary Search Tree (BST)**: A binary search tree is a special type of binary tree where the left child of a node contains elements less than the node's value, and the right child contains elements greater than the node's value. This property makes searching, insertion, and deletion operations efficient.

3. **Balanced Tree**: A balanced tree is a tree in which the difference in heights between the left and right subtrees of any node is limited, ensuring a more even distribution of nodes and improving performance for various operations.

4. **N-ary Tree**: An N-ary tree is a tree in which each node can have more than two children (more specifically, it can have 'N' children).

## Operations

Trees support various operations to manipulate the nodes and their connections:

1. **Insertion**: Adding a new node to the tree, either as a child of an existing node or as the root.

2. **Deletion**: Removing a node and its subtree from the tree.

## Use Cases

Trees are widely used in various fields and applications due to their hierarchical nature and efficient search and retrieval properties. Some common use cases include:

1. **File System**: File systems in computers are often represented as tree structures, with directories and files organized hierarchically.

2. **HTML DOM**: In web development, the HTML Document Object Model (DOM) is represented as a tree, allowing manipulation and traversal of web page elements.

3. **Organization Chart**: Company organization charts are often represented as trees, with managers as parent nodes and employees as child nodes.

4. **Routing Algorithms**: Trees are used in computer networks for routing data efficiently from one node to another.

## Time Complexity:

1. **Insertion**: Inserting a new node as a child of an existing node takes O(1) time since adding a child to the children list involves constant time operation.

2. **Deletion**: Deleting a node and its subtree involves finding the node to be deleted (which could take O(n) time in the worst case if the tree is unbalanced) and then removing it along with all its descendants. Therefore, the time complexity of deletion can be O(n) in the worst case.

## Space Complexity

In general, the space complexity of a tree is O(n), where n is the number of nodes in the tree, as each node consumes memory.
