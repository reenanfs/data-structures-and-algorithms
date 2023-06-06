import unittest
from linked_list import LinkedList


class TestLinkedList(unittest.TestCase):
    def test_append(self):
        linked_list = LinkedList(10)
        linked_list.append(20)
        linked_list.append(30)
        self.assertEqual(linked_list.print_list(), [10, 20, 30])
        self.assertEqual(linked_list.length, 3)

    def test_append_multiple(self):
        linked_list = LinkedList(10)
        linked_list.append(20)
        linked_list.append(30)
        linked_list.append(40)
        linked_list.append(50)
        self.assertEqual(linked_list.print_list(), [10, 20, 30, 40, 50])
        self.assertEqual(linked_list.length, 5)

    def test_append_and_print_list(self):
        linked_list = LinkedList(10)
        linked_list.append(20)
        linked_list.append(30)
        linked_list.append(40)

        expected_output = [10, 20, 30, 40]
        self.assertEqual(linked_list.print_list(), expected_output)


if __name__ == "__main__":
    unittest.main()
