class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert_iteratively(self, value):
        new_node = Node(value)

        if not self.root:
            self.root = new_node
            return

        current_node = self.root
        while current_node:
            if value < current_node.value:
                if not current_node.left:
                    current_node.left = new_node
                    return
                current_node = current_node.left
            elif value > current_node.value:
                if not current_node.right:
                    current_node.right = new_node
                    return
                current_node = current_node.right
            else:
                return

    def insert_recursively(self, value):
        def insert_helper(node, value):
            if not node:
                return Node(value)

            if value < node.value:
                node.left = insert_helper(node.left, value)
            elif value > node.value:
                node.right = insert_helper(node.right, value)

            return node

        self.root = insert_helper(self.root, value)

    def contains_iteratively(self, value):
        if not self.root:
            return False

        current_node = self.root
        while current_node:
            if current_node.value == value:
                return True
            elif current_node.value > value:
                current_node = current_node.left
            else:
                current_node = current_node.right
        return False

    def contains_recursively(self, value):
        def contains_helper(node, value):
            if not node:
                return False
            elif node.value == value:
                return True
            elif node.value > value:
                return contains_helper(node.left, value)
            else:
                return contains_helper(node.right, value)

        return contains_helper(self.root, value)

    def breadth_first_search_iteratively(self):
        queue = []
        value_list = []

        if not self.root:
            return value_list

        queue.append(self.root)

        while queue:
            current_node = queue.pop(0)

            value_list.append(current_node.value)

            if current_node.left:
                queue.append(current_node.left)

            if current_node.right:
                queue.append(current_node.right)

        return value_list

    def breadth_first_search_recursively(self):
        value_list = []

        if not self.root:
            return value_list

        def traverse(node_queue):
            if not node_queue:
                return value_list

            current_node = node_queue.pop(0)

            value_list.append(current_node.value)

            if current_node.left:
                node_queue.append(current_node.left)

            if current_node.right:
                node_queue.append(current_node.right)

            return traverse(node_queue)

        queue = [self.root]
        return traverse(queue)

    def depth_first_search_iteratively_pre_order(self):
        stack = []
        value_list = []

        if not self.root:
            return value_list

        stack.append(self.root)

        while stack:
            current_node = stack.pop()

            value_list.append(current_node.value)

            if current_node.right:
                stack.append(current_node.right)

            if current_node.left:
                stack.append(current_node.left)

        return value_list

    def depth_first_search_recursively_pre_order(self):
        value_list = []

        if not self.root:
            return value_list

        def traverse(node):
            value_list.append(node.value)

            if node.left:
                traverse(node.left)

            if node.right:
                traverse(node.right)

        traverse(self.root)
        return value_list

    def depth_first_search_iteratively_post_order(self):
        stack = []
        value_list = []

        if not self.root:
            return value_list

        stack.append(self.root)

        while stack:
            current_node = stack.pop()
            value_list.insert(0, current_node.value)

            if current_node.left:
                stack.append(current_node.left)

            if current_node.right:
                stack.append(current_node.right)

        return value_list

    def depth_first_search_recursively_post_order(self):
        value_list = []

        if not self.root:
            return value_list

        def traverse(node):
            if node.left:
                traverse(node.left)

            if node.right:
                traverse(node.right)

            value_list.append(node.value)

        traverse(self.root)
        return value_list

    def depth_first_search_iteratively_in_order(self):
        value_list = []
        if not self.root:
            return value_list

        stack = []
        current_node = self.root

        while current_node or stack:
            while current_node:
                stack.append(current_node)
                current_node = current_node.left

            current_node = stack.pop()
            value_list.append(current_node.value)
            current_node = current_node.right

        return value_list

    def depth_first_search_recursively_in_order(self):
        value_list = []

        if not self.root:
            return value_list

        def traverse(node):
            if node.left:
                traverse(node.left)
            value_list.append(node.value)
            if node.right:
                traverse(node.right)

        traverse(self.root)
        return value_list
