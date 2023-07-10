# Linked List

A linked list is a linear data structure that consists of a sequence of elements called nodes. Each node contains two components: a value or data field and a reference (or pointer) to the next node in the sequence.

## Structure

A linked list is composed of nodes, where each node contains:

- **Value**: The value or information to be stored.
- **Next**: A reference to the next node in the sequence.

With this in mind, the basic structure of a linked list can be visualized as follows:

    Node 1         Node 2         Node 3         Node 4
    +-------+      +-------+      +-------+      +-------+
    | Value |  --> | Value |  --> | Value |  --> | Value |
    +-------+      +-------+      +-------+      +-------+
    |  Next |      |  Next |      |  Next |      |  Next |
    +-------+      +-------+      +-------+      +-------+

Here, each node stores a value and a reference to the next node. The last node in the list points to `null`, indicating the end of the list.

## Operations

A linked list supports various operations that allow manipulation and retrieval of data within the list. Here are some common operations performed on a linked list:

### Insertion

Insertion involves adding a new node to the linked list at a specified position. There are three main scenarios for insertion:

1. **Prepend - Insertion at the Beginning**: In this case, a new node is inserted at the beginning of the linked list, becoming the new head of the list. The new node's next pointer is set to the current head, effectively pushing the existing elements down the list.

2. **Insert - Insertion in the Middle**: This scenario involves inserting a new node between two existing nodes. The new node's next pointer is set to the next node of the desired position, while the previous node's next pointer is updated to point to the new node.

3. **Append - Insertion at the End**: Here, a new node is inserted at the end of the linked list. The last node's next pointer is set to the new node, which becomes the new last node of the list.

### Deletion

Deletion involves removing a node from the linked list. Similar to insertion, there are three main scenarios for deletion:

1. **Shift / Pop Head - Deletion at the Beginning**: In this case, the first node (head) of the linked list is removed. The head is updated to the next node, effectively discarding the current head.

2. **Remove - Deletion in the Middle**: Here, a node is deleted from a position within the linked list, excluding the first and last nodes. The previous node's next pointer is updated to skip the deleted node and point to the next node.

3. **Pop - Deletion at the End**: This scenario involves removing the last node from the linked list. The second-to-last node's next pointer is set to `null`, designating it as the new last node.

### Traversal

Traversal refers to the process of accessing each node in the linked list in a sequential manner. Starting from the head node, you can iterate through the list by following the next pointers until you reach the end of the list. Traversal allows you to perform operations on each node, such as printing the values or applying transformations.

### Searching

Searching involves finding a specific value or condition within the linked list. Starting from the head node, you can iterate through the list, comparing each node's value with the desired value or condition. If a match is found, you can return the node or perform the required operation.

## Types of Linked Lists

There are different types of linked lists, including:

- **Singly Linked List**: Each node points to the next node in the sequence.
- **Doubly Linked List**: Each node has references to both the next and previous nodes.
- **Circular Linked List**: The last node points back to the first node, forming a circular structure.

This repository will cover the singly and doubly linked lists.

## Use Cases

Linked lists have versatile applications in various scenarios, making them a fundamental data structure in computer science. Here are some common use cases where linked lists are widely employed:

### Implementing Stacks, Queues, and Hash Tables

Linked lists provide a foundation for implementing other data structures such as stacks, queues, and hash tables. For example:

- **Stacks**: A stack can be implemented using a singly linked list, where nodes are added and removed from one end (top) of the list. The last inserted node represents the top of the stack. Stacks are used in various applications such as expression evaluation, backtracking algorithms, and browser history management.

- **Queues**: A queue can also be implemented using a singly linked list, where nodes are added at one end (rear) and removed from the other end (front) of the list. The first inserted node represents the front of the queue. Queues find applications in scheduling algorithms, task management systems, and printer spooling.

- **Hash Tables**: In hash table implementations, linked lists are commonly used to handle collisions. Each bucket in the hash table can be a linked list, and elements with the same hash value are stored in the corresponding linked list. Hash tables are widely used in data storage, caching, and dictionary-based operations.

### Real Examples of Use: Singly Linked List and Doubly Linked List

Here are some real-world examples that illustrate the use of singly linked lists and doubly linked lists:

#### Examples of Singly Linked List

- **Undo Button in Applications**: The undo button in applications like Microsoft Word, Paint, and others often utilizes a linked list of states. Each state change is stored as a node in the list, allowing users to navigate backward and undo previous actions. This implementation provides a history of actions and enables the application to revert to a previous state.

- **GPS Navigation**: GPS navigation systems make use of a linked list to represent map data. Each node in the list represents a location, and the linked list allows for efficient traversal from the origin to the destination. Rerouting by a GPS is an example of adding and removing nodes in the map data, ensuring real-time navigation updates.

#### Examples of Doubly Linked List

- **Browser's Next and Previous Button**: Browsers utilize a doubly linked list to implement the functionality of the next and previous buttons. Each visited URL is stored as a node, and the doubly linked list allows for efficient navigation through the browsing history. Users can easily move forward and backward through their visited web pages.

- **Image Viewer's Next and Previous Button**: Image viewing applications often use a doubly linked list to manage a collection of images. Each image is represented as a node, and the doubly linked list enables easy navigation between images using the next and previous buttons. Users can seamlessly move between images without the need to reload them.

- **Undo and Redo in Image Editing Software**: Image editing software like Photoshop utilizes a doubly linked list to implement the undo and redo functionality. Each state or action is stored as a node, allowing users to undo previous changes and redo them if needed. The doubly linked list ensures efficient navigation through the history of edits.

These examples demonstrate how singly linked lists and doubly linked lists are employed in various domains to solve specific problems. The flexibility and versatility of linked lists make them valuable data structures for managing dynamic data and enabling efficient navigation and manipulation.

## Time Complexity

- Prepend - Insertion at the Beginning: O(1)

  - Inserting a node at the beginning of a linked list involves updating the head pointer, which takes constant time.

- Insert - Insertion in the Middle: O(n)

  - To insert a node at an arbitrary position in the linked list, you need to traverse the list until you reach the desired position. In the worst case, this requires visiting all n nodes, resulting in a linear time complexity.

- Append - Insertion at the End: O(n) or O(1) if the tail pointer is maintained

  - If the linked list maintains a tail pointer, inserting a node at the end can be done in constant time by updating the tail pointer. Otherwise, you need to traverse the entire list to reach the last node, resulting in a linear time complexity.

- Shift - Deletion at the Beginning: O(1)

  - Deleting the first node involves updating the head pointer, which can be done in constant time.

- Remove - Deletion in the Middle: O(n)

  - Deleting a node from an arbitrary position requires traversing the list to find the node to be deleted. In the worst case, you may need to visit all n nodes, resulting in a linear time complexity.

- Pop - Deletion at the End: O(n) or O(1) if the tail pointer is maintained

  - Similar to insertion, deleting the last node can be done in constant time if the tail pointer is maintained. Otherwise, you need to traverse the list to update the second-to-last node's next pointer, resulting in a linear time complexity.

- Traversal: O(n)

  - To traverse a linked list and visit each node, you need to iterate through all n nodes, resulting in a linear time complexity.

- Searching: O(n)
  - In the worst case, you may need to visit all n nodes to find a specific value or condition in the linked list, resulting in a linear time complexity.

## Space Complexity

The space complexity of a linked list is O(n) because it requires additional memory to store the nodes and their corresponding pointers. Each node in the linked list occupies space for the value/data and the next (and possibly previous) pointers.

It's worth noting that the space complexity can be further increased if additional pointers, such as a tail pointer or previous pointers in a doubly linked list, are maintained.

Keep in mind that these time and space complexities are general guidelines and may vary depending on specific implementations or optimizations.

**Note**: This file is a living document and will be updated as I continue to learn more about linked lists and enhance my understanding.
