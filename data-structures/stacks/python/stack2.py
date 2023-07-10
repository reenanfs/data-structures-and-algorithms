class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class Stack:
    def __init__(self):
        self.top = None
        self.length = 0

    def push(self, value):
        new_node = Node(value)

        if self.length == 0:
            self.top = new_node
        else:
            new_node.next = self.top
            self.top = new_node

        self.length += 1

    def pop(self):
        if self.length == 0:
            return None

        removed_node = self.top
        self.top = self.top.next
        removed_node.next = None

        self.length -= 1
        return removed_node.value

    def size(self):
        return self.length

    def peek(self):
        if self.length == 0:
            return None
        return self.top.value

    def print_stack(self):
        stack_list = []
        current_node = self.top
        while current_node is not None:
            stack_list.append(current_node.value)
            current_node = current_node.next

        return stack_list

    def __str__(self):
        return f"{self.print_stack()}"
