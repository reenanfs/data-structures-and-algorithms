import unittest
from linked_list import LinkedList


class TestLinkedList(unittest.TestCase):
    def setUp(self) -> None:
        self.linked_list = LinkedList(10)
        self.linked_list.append(20)
        self.linked_list.append(30)
        return super().setUp()

    def test_append(self):
        # Test one append
        self.linked_list.append(40)
        expected_output = [10, 20, 30, 40]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 10)
        self.assertEqual(self.linked_list.tail.value, 40)
        self.assertEqual(self.linked_list.length, 4)

        # Test multiple appends
        self.linked_list.append(50)
        self.linked_list.append(60)

        expected_output = [10, 20, 30, 40, 50, 60]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 10)
        self.assertEqual(self.linked_list.tail.value, 60)
        self.assertEqual(self.linked_list.length, 6)

    def test_insert(self):
        # Test positive index values
        self.linked_list.insert(1, 15)
        expected_output = [10, 15, 20, 30]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 10)
        self.assertEqual(self.linked_list.tail.value, 30)
        self.assertEqual(self.linked_list.length, 4)

        self.linked_list.insert(0, 0)
        self.linked_list.insert(5, 35)
        expected_output = [0, 10, 15, 20, 30, 35]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 0)
        self.assertEqual(self.linked_list.tail.value, 35)
        self.assertEqual(self.linked_list.length, 6)

        # Test negative index value
        self.linked_list.insert(-1, 5)
        expected_output = [5, 0, 10, 15, 20, 30, 35]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 5)
        self.assertEqual(self.linked_list.tail.value, 35)
        self.assertEqual(self.linked_list.length, 7)

        # Test index value greater than list size
        self.linked_list.insert(8, 40)
        expected_output = [5, 0, 10, 15, 20, 30, 35, 40]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 5)
        self.assertEqual(self.linked_list.tail.value, 40)
        self.assertEqual(self.linked_list.length, 8)

        for _ in range(self.linked_list.length):
            self.linked_list.pop()

        # Test when there is no node
        self.linked_list.insert(0, 10)
        expected_output = [10]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 10)
        self.assertEqual(self.linked_list.tail.value, 10)
        self.assertEqual(self.linked_list.length, 1)

    def test_prepend(self):
        self.linked_list.pop()
        self.linked_list.pop()
        self.linked_list.pop()

        # Test one prepend
        self.linked_list.prepend(30)
        expected_output = [30]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 30)
        self.assertEqual(self.linked_list.tail.value, 30)
        self.assertEqual(self.linked_list.length, 1)

        # Test several prepends
        self.linked_list.prepend(20)
        self.linked_list.prepend(10)
        expected_output = [10, 20, 30]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 10)
        self.assertEqual(self.linked_list.tail.value, 30)
        self.assertEqual(self.linked_list.length, 3)

    def test_pop_head(self):
        # Test on a linked list with with several values
        returned_node = self.linked_list.pop_head()
        expected_output = [20, 30]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(returned_node, 10)
        self.assertEqual(self.linked_list.head.value, 20)
        self.assertEqual(self.linked_list.tail.value, 30)
        self.assertEqual(self.linked_list.length, 2)

        returned_node = self.linked_list.pop_head()
        expected_output = [30]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(returned_node, 20)
        self.assertEqual(self.linked_list.head.value, 30)
        self.assertEqual(self.linked_list.tail.value, 30)
        self.assertEqual(self.linked_list.length, 1)

        # Test on a linked list with one element
        returned_node = self.linked_list.pop()
        expected_output = []
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(returned_node, 30)
        self.assertIsNone(self.linked_list.head)
        self.assertIsNone(self.linked_list.tail)
        self.assertEqual(self.linked_list.length, 0)

        # Test on an empty linked list
        returned_node = self.linked_list.pop()
        expected_output = []
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertIsNone(returned_node)
        self.assertIsNone(self.linked_list.head)
        self.assertIsNone(self.linked_list.tail)
        self.assertEqual(self.linked_list.length, 0)

    def test_pop(self):
        # Test on a linked list with with several values
        returned_node = self.linked_list.pop()
        expected_output = [10, 20]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(returned_node, 30)
        self.assertEqual(self.linked_list.head.value, 10)
        self.assertEqual(self.linked_list.tail.value, 20)
        self.assertEqual(self.linked_list.length, 2)

        returned_node = self.linked_list.pop()
        expected_output = [10]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(returned_node, 20)
        self.assertEqual(self.linked_list.head.value, 10)
        self.assertEqual(self.linked_list.tail.value, 10)
        self.assertEqual(self.linked_list.length, 1)

        # Test on a linked list with one element
        returned_node = self.linked_list.pop()
        expected_output = []
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(returned_node, 10)
        self.assertIsNone(self.linked_list.head)
        self.assertIsNone(self.linked_list.tail)
        self.assertEqual(self.linked_list.length, 0)

        # Test on an empty linked list
        returned_node = self.linked_list.pop()
        expected_output = []
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertIsNone(returned_node)
        self.assertIsNone(self.linked_list.head)
        self.assertIsNone(self.linked_list.tail)
        self.assertEqual(self.linked_list.length, 0)

    def test_remove(self):
        # Test positive index values
        returned_node = self.linked_list.remove(1)
        expected_output = [10, 30]
        self.assertEqual(returned_node, 20)
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 10)
        self.assertEqual(self.linked_list.tail.value, 30)
        self.assertEqual(self.linked_list.length, 2)

        first_returned_node = self.linked_list.remove(0)
        second_returned_node = self.linked_list.remove(0)
        expected_output = []
        self.assertEqual(first_returned_node, 10)
        self.assertEqual(second_returned_node, 30)
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertIsNone(self.linked_list.head)
        self.assertIsNone(self.linked_list.tail)
        self.assertEqual(self.linked_list.length, 0)

        # Test on an empty linked list
        returned_node = self.linked_list.remove(5)
        expected_output = []
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertIsNone(returned_node)
        self.assertIsNone(self.linked_list.head)
        self.assertIsNone(self.linked_list.tail)
        self.assertEqual(self.linked_list.length, 0)

        for value in range(10, 31, 10):
            self.linked_list.append(value)

        # Test index value greater than list size
        returned_node = self.linked_list.remove(8)
        expected_output = [10, 20]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 10)
        self.assertEqual(self.linked_list.tail.value, 20)
        self.assertEqual(self.linked_list.length, 2)

        # Test when index is negative
        self.linked_list.remove(-2)
        expected_output = [20]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 20)
        self.assertEqual(self.linked_list.tail.value, 20)
        self.assertEqual(self.linked_list.length, 1)

    def test_get(self):
        # Test positive index values
        first_node = self.linked_list.get(0)
        second_node = self.linked_list.get(1)
        third_node = self.linked_list.get(2)

        self.assertEqual(first_node.value, 10)
        self.assertEqual(second_node.value, 20)
        self.assertEqual(third_node.value, 30)

        # Test negative index value
        with self.assertRaises(IndexError):
            self.linked_list.get(-1)

        # Test index value greater than list size
        with self.assertRaises(IndexError):
            self.linked_list.get(3)

    def test_set_value(self):
        # Test positive index values
        returned_node = self.linked_list.set_value(0, 30)
        expected_output = [30, 20, 30]
        self.assertEqual(returned_node.value, 30)
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 30)
        self.assertEqual(self.linked_list.tail.value, 30)
        self.assertEqual(self.linked_list.length, 3)

        returned_node = self.linked_list.set_value(1, -20)
        expected_output = [30, -20, 30]
        self.assertEqual(returned_node.value, -20)
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 30)
        self.assertEqual(self.linked_list.tail.value, 30)
        self.assertEqual(self.linked_list.length, 3)

        returned_node = self.linked_list.set_value(2, 10)
        expected_output = [30, -20, 10]
        self.assertEqual(returned_node.value, 10)
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 30)
        self.assertEqual(self.linked_list.tail.value, 10)
        self.assertEqual(self.linked_list.length, 3)

        # Test negative index value
        with self.assertRaises(IndexError):
            self.linked_list.set_value(-1, 10)

        # Test index value greater than list size
        with self.assertRaises(IndexError):
            self.linked_list.set_value(3, 40)

        self.linked_list.pop()
        self.linked_list.pop()
        self.linked_list.pop()

        # Test when there is no node to set
        with self.assertRaises(IndexError):
            self.linked_list.set_value(0, 30)

    def test_print_list(self):
        expected_output = [10, 20, 30]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 10)
        self.assertEqual(self.linked_list.tail.value, 30)
        self.assertEqual(self.linked_list.length, 3)

    def test_reverse(self):
        self.linked_list.reverse()
        expected_output = [30, 20, 10]
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertEqual(self.linked_list.head.value, 30)
        self.assertEqual(self.linked_list.tail.value, 10)
        self.assertEqual(self.linked_list.length, 3)

        for _ in range(self.linked_list.length):
            self.linked_list.pop()

        self.linked_list.reverse()
        expected_output = []
        self.assertEqual(self.linked_list.print_list(), expected_output)
        self.assertIsNone(self.linked_list.head)
        self.assertIsNone(self.linked_list.tail)
        self.assertEqual(self.linked_list.length, 0)


if __name__ == "__main__":
    unittest.main()
