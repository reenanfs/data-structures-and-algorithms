class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Queue:
    def __init__(self):
        self.rear = None
        self.front = None
        self.length = 0

    def enqueue(self, value):
        new_node = Node(value)

        if self.length == 0:
            self.rear = new_node
            self.front = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

        self.length += 1

    def dequeue(self):
        if self.length == 0:
            return None

        removed_node = self.front
        self.front = self.front.next

        removed_node.next = None

        self.length -= 1
        return removed_node.value

    def size(self):
        return self.length

    def peek(self):
        return self.front.value if self.front else None

    def print_queue(self):
        queue_list = []
        current_node = self.front

        while current_node:
            queue_list.append(current_node.value)
            current_node = current_node.next

        return queue_list
