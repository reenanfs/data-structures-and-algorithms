class Node:
    def __init__(self, value):
        self.value = value
        self.children: list[Node] = []

    def insert(self, value):
        child = Node(value)
        self.children.append(child)

    def remove(self, value):
        self.children = [
            child for child in self.children if child.value != value
        ]


class Tree:
    def __init__(self):
        self.root: Node | None = None

    def create_root(self, value):
        child = Node(value)
        self.root = child
