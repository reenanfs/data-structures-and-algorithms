import unittest
from stack import Stack


class TestStack(unittest.TestCase):
    def setUp(self) -> None:
        self.stack = Stack()
        self.stack.push(1)
        self.stack.push(2)
        self.stack.push(3)
        return super().setUp()

    def test_push(self):
        self.assertEqual(self.stack.size(), 3)
        self.assertEqual(self.stack.peek(), 3)

        self.stack.push(4)
        self.assertEqual(self.stack.size(), 4)
        self.assertEqual(self.stack.peek(), 4)

    def test_pop(self):
        popped_item = self.stack.pop()
        self.assertEqual(popped_item, 3)
        self.assertEqual(self.stack.size(), 2)
        self.assertEqual(self.stack.peek(), 2)

        self.stack.pop()
        self.assertEqual(self.stack.size(), 1)
        self.assertEqual(self.stack.peek(), 1)

        self.stack.pop()
        self.assertEqual(self.stack.size(), 0)
        self.assertIsNone(self.stack.peek())

        # Test pop on an empty stack
        empty_stack = Stack()
        popped_item = empty_stack.pop()
        self.assertIsNone(popped_item)
        self.assertEqual(empty_stack.size(), 0)
        self.assertIsNone(empty_stack.peek())

    def test_size(self):
        self.assertEqual(self.stack.size(), 3)

        self.stack.push(4)
        self.assertEqual(self.stack.size(), 4)

        self.stack.pop()
        self.assertEqual(self.stack.size(), 3)

        self.stack.pop()
        self.assertEqual(self.stack.size(), 2)

        self.stack.pop()
        self.assertEqual(self.stack.size(), 1)

        self.stack.pop()
        self.assertEqual(self.stack.size(), 0)

    def test_peek(self):
        self.assertEqual(self.stack.peek(), 3)

        self.stack.push(4)
        self.assertEqual(self.stack.peek(), 4)

        self.stack.pop()
        self.assertEqual(self.stack.peek(), 3)

        self.stack.pop()
        self.assertEqual(self.stack.peek(), 2)

        self.stack.pop()
        self.assertEqual(self.stack.peek(), 1)

        self.stack.pop()
        self.assertIsNone(self.stack.peek())

        # Test peek on an empty stack
        empty_stack = Stack()
        self.assertIsNone(empty_stack.peek())

    def test_print_stack(self):
        expected_output = [1, 2, 3]
        self.assertEqual(self.stack.print_stack(), expected_output)

        self.stack.push(4)
        expected_output = [1, 2, 3, 4]
        self.assertEqual(self.stack.print_stack(), expected_output)

        self.stack.pop()
        expected_output = [1, 2, 3]
        self.assertEqual(self.stack.print_stack(), expected_output)

        self.stack.pop()
        expected_output = [1, 2]
        self.assertEqual(self.stack.print_stack(), expected_output)

        self.stack.pop()
        expected_output = [1]
        self.assertEqual(self.stack.print_stack(), expected_output)

        self.stack.pop()
        expected_output = []
        self.assertEqual(self.stack.print_stack(), expected_output)

        # Test print_stack on an empty stack
        empty_stack = Stack()
        expected_output = []
        self.assertEqual(empty_stack.print_stack(), expected_output)


if __name__ == "__main__":
    unittest.main()
