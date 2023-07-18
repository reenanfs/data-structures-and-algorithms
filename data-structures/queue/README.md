# Queue

A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It represents a collection of elements with two main operations: **enqueue** and **dequeue**. The **enqueue** operation adds an element to the rear of the queue, while the **dequeue** operation removes the frontmost element from the queue.

## Structure

A queue can be visualized as a horizontal arrangement of elements, where the front of the queue is accessible for dequeue operation, and the rear is accessible for enqueue operation. Elements are added at the rear and removed from the front of the queue.

## Operations

A queue supports the following operations:

- **Enqueue**: Adds an element to the rear of the queue.
- **Dequeue**: Removes and returns the frontmost element from the queue.
- **Peek**: Returns the value of the frontmost element without removing it.
- **Size**: Returns the number of elements in the queue.

## Implementation

In this repository, we'll only cover the linked list-based queue, since the array-based queue is less performant:

1. **Linked List-based Queue**: This implementation uses a linked list to store the elements. Each node in the linked list contains the value and a reference to the next node. The front of the queue is represented by the head of the linked list, and the rear is represented by the tail of the linked list. Enqueueing an element involves adding a new node at the tail, and dequeuing an element involves removing the head node.

## Use Cases

Queues have various applications in computer science and software development. Some common use cases include:

- **Breadth-First Search (BFS)**: Queues are used in BFS algorithms to manage the order of exploring neighboring nodes in a graph or tree level by level.
- **Task Scheduling**: Queues are used to manage and schedule tasks in concurrent systems or multi-threaded applications.
- **Print Spooling**: In printer spooling systems, print jobs are managed using queues to ensure fairness and order in printing.
- **Web Server Request Handling**: Web servers often use queues to manage incoming requests and process them in the order they are received.

## Time Complexity

The time complexity of queue operations using a linked list are as follows:

- **Enqueue**: O(1)
- **Dequeue**: O(1)
- **Peek**: O(1)
- **Size**: O(1)

## Space Complexity

The linked list-based implementations have a space complexity of O(n), where n is the number of elements in the queue.
