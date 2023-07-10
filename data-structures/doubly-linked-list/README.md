# Doubly Linked List

A doubly linked list is a type of linked list where each node contains references to both the next and previous nodes in the sequence. This additional reference to the previous node allows for traversal in both directions, providing more flexibility compared to a singly linked list.

## Structure

In a doubly linked list, each node contains the following components:

- **Value**: The value or information to be stored.
- **Next**: A reference to the next node in the sequence.
- **Previous**: A reference to the previous node in the sequence.

The basic structure of a doubly linked list can be visualized as follows:

            Node 1          Node 2          Node 3          Node 4
            +----------+    +----------+    +----------+    +----------+
            |   Value  |    |   Value  |    |   Value  |    |   Value  |
            +----------+    +----------+    +----------+    +----------+
            |  Next    |--> |  Next    |--> |  Next    |--> |  Next    |
            +----------+    +----------+    +----------+    +----------+
            | Previous |<-- | Previous |<-- | Previous |<-- | Previous |
            +----------+    +----------+    +----------+    +----------+

Here, the first node's previous pointer and the last node's next pointer both point to null, indicating the start and end of the list.

## Operations

A doubly linked list supports similar operations to a singly linked list, with the added advantage of bidirectional traversal. Here are the common operations performed on a doubly linked list:

### Insertion

Insertion in a doubly linked list can be performed in the same three main scenarios as a singly linked list:

1. **Prepend - Insertion at the Beginning**: A new node is inserted at the beginning of the list, becoming the new head. The new node's next pointer is set to the current head, and the current head's previous pointer is updated to point to the new node.

2. **Insert - Insertion in the Middle**: A new node is inserted between two existing nodes. The new node's next pointer is set to the next node of the desired position, and the new node's previous pointer is set to the previous node. The previous node's next pointer is updated to point to the new node, and the next node's previous pointer is updated to point to the new node.

3. **Append - Insertion at the End**: A new node is inserted at the end of the list. The last node's next pointer is set to the new node, and the new node's previous pointer is set to the previous last node. The new node becomes the new last node, and its next pointer is set to null.

### Deletion

Deletion in a doubly linked list is similar to deletion in a singly linked list:

1. **Shift / Pop Head - Deletion at the Beginning**: The first node (head) of the list is removed. The head is updated to the next node, and the new head's previous pointer is set to null.

2. **Remove - Deletion in the Middle**: A node is deleted from an arbitrary position within the list, excluding the first and last nodes. The previous node's next pointer is updated to skip the deleted node and point to the next node, and the next node's previous pointer is updated to point to the previous node.

3. **Pop - Deletion at the End**: The last node of the list is removed. The second-to-last node's next pointer is set to null, designating it as the new last node.

### Traversal

Traversal in a doubly linked list allows for both forward and backward traversal. You can start from either the head or tail and follow the next and previous pointers to iterate through the list in either direction. This bidirectional traversal provides more flexibility compared to a singly linked list.

### Searching

Searching in a doubly linked list is similar to searching in a singly linked list. You can traverse the list in either direction, comparing each node's value with the desired value or condition. If a match is found, you can return the node or perform the required operation.

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

The space complexity of a doubly linked list is O(n), similar to a singly linked list. Each node requires additional memory to store the value/data and the references to the next and previous nodes.

The space complexity can be further increased if additional pointers, such as a tail pointer, are maintained in the doubly linked list implementation.

**Note**: This file is a living document and will be updated as I continue to learn more about linked lists and enhance my understanding.
