class Node:
    def __init__(self, value):
        self.value = value
        self.next: Node | None = None
        self.prev: Node | None = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def append(self, value):
        new_node = Node(value)
        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1

    def insert(self, index: int, value):
        if index <= 0:
            return self.prepend(value)
        elif index > self.length - 1:
            return self.append(value)

        new_node = Node(value)

        previous_node = self.get(index - 1)
        current_node = previous_node.next

        previous_node.next = new_node
        new_node.next = current_node
        new_node.prev = previous_node
        current_node.prev = new_node

        self.length += 1

    def prepend(self, value):
        new_node = Node(value)

        if self.length == 0:
            self.head = new_node
            self.tail = new_node
        else:
            self.head.prev = new_node
            new_node.next = self.head
            self.head = new_node

        self.length += 1

    def pop_head(self):
        if self.length == 0:
            return None

        removed_node = self.head

        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            next_node = self.head.next
            self.head = next_node

            next_node.prev = None
            removed_node.next = None

        self.length -= 1

        return removed_node.value

    def pop(self):
        if self.tail is None:
            return None

        removed_node = self.tail

        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            new_tail = self.tail.prev
            new_tail.next = None
            self.tail = new_tail

        removed_node.prev = None
        self.length -= 1
        return removed_node.value

    def remove(self, index: int):
        if self.length == 0:
            return None

        if index <= 0:
            return self.pop_head()
        elif index >= self.length - 1:
            return self.pop()

        previous_node = self.get(index - 1)
        removed_node = previous_node.next
        next_node = removed_node.next

        previous_node.next = next_node
        next_node.prev = previous_node

        removed_node.prev = None
        removed_node.next = None

        self.length -= 1
        return removed_node.value

    def get(self, index: int) -> Node:
        if index < 0 or index > self.length - 1:
            raise IndexError("Index out of bounds.")

        if index == 0:
            return self.head
        elif index == self.length - 1:
            return self.tail

        if index < self.length / 2:
            current_node = self.head
            for _ in range(index):
                current_node = current_node.next
        else:
            current_node = self.tail
            for _ in range(self.length - 1, index, -1):
                current_node = current_node.prev

        return current_node

    def set_value(self, index: int, value) -> Node:
        current_node = self.get(index)
        current_node.value = value
        return current_node

    def print_list(self) -> list:
        printed_list = []
        current_node = self.head
        while current_node is not None:
            printed_list.append(current_node.value)
            current_node = current_node.next

        return printed_list

    def reverse(self):
        if self.length <= 1:
            return

        current_node = self.head
        previous_node = None

        self.head, self.tail = self.tail, self.head

        while current_node is not None:
            next_node = current_node.next
            current_node.next = previous_node
            current_node.prev = next_node
            previous_node = current_node
            current_node = next_node
