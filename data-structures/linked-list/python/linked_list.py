class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1

    def append(self, value):
        new_node = Node(value)

        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node

        self.length += 1

    def prepend(self, value):
        new_node = Node(value)

        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node

        self.length += 1

    def pop_head(self):
        if self.length == 0:
            return None
        elif self.length == 1:
            returned_node = self.head
            self.head = None
            self.tail = None
        else:
            returned_node = self.head
            self.head = self.head.next

        self.length -= 1
        return returned_node.value

    def pop(self):
        if self.tail is None:
            return None

        removed_node = self.tail

        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            last_but_one_node = self.get(self.length - 2)
            self.tail = last_but_one_node
            self.tail.next = None

        self.length -= 1

        return removed_node.value

    def get(self, index: int) -> Node:
        if index < 0 or index > self.length - 1:
            raise IndexError("Index out of bounds")
        elif index == 0:
            return self.head
        elif index == self.length - 1:
            return self.tail

        current_node = self.head
        for _ in range(index):
            current_node = current_node.next

        return current_node

    def set(self, index: int, value) -> Node:
        current_node = self.get(index)
        current_node.value = value
        return current_node

    def print_list(self) -> list[int]:
        array_list = []
        current_node = self.head
        while current_node is not None:
            array_list.append(current_node.value)
            current_node = current_node.next
        return array_list
