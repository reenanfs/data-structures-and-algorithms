# Stack

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. It represents a collection of elements with two main operations: **push** and **pop**. The **push** operation adds an element to the top of the stack, while the **pop** operation removes the topmost element from the stack.

## Structure

A stack can be visualized as a vertical arrangement of elements, where the topmost element is accessible for operations. Elements are added and removed from the same end, known as the top of the stack.

## Operations

A stack supports the following operations:

- **Push**: Adds an element to the top of the stack.
- **Pop**: Removes and returns the topmost element from the stack.
- **Peek**: Returns the value of the topmost element without removing it.
- **Size**: Returns the number of elements in the stack.

## Implementation

In this repository we'll cover two common implementations of stacks:

1. **Array-based Stack**: This implementation uses an array to store the elements. The top of the stack is represented by the last index of the array. Pushing an element involves adding it to the end of the array, and popping an element involves removing the last element from the array.

2. **Linked List-based Stack**: This implementation uses a linked list to store the elements. Each node in the linked list contains the value and a reference to the next node. The top of the stack is represented by the head of the linked list. Pushing an element involves adding a new node at the head, and popping an element involves removing the head node.

## Use Cases

Stacks have various applications in computer science and software development. Some common use cases include:

- **Function Call Stack**: Stacks are used to manage function calls in programming languages. Each function call is pushed onto the stack, and when a function returns, it is popped from the stack.
- **Expression Evaluation**: Stacks are used to evaluate arithmetic expressions, infix-to-postfix conversions, and postfix expression evaluations.
- **Undo/Redo Operations**: Stacks can be used to implement undo and redo functionality in applications by keeping track of operations or states.
- **Backtracking Algorithms**: Stacks are used in backtracking algorithms such as depth-first search (DFS) to store the search path.

## Time and Space Complexity

The time and space complexity of stack operations implemented using an array or linked list are as follows:

The space complexity of a stack implemented using an array or linked list is O(n), where n is the number of elements in the stack.

## Time Complexity

The time complexity of stack operations using an array or linked list are as follows:

- **Push**: O(1)
- **Pop**: O(1)
- **Peek**: O(1)
- **Size**: O(1)

## Space Complexity

The space complexity of a stack depends on the number of elements stored in the stack. Both the array-based and linked list-based implementations have a space complexity of O(n), where n is the number of elements in the stack.
