import unittest
from binary_search_tree import (
    BinarySearchTree,
)


class TestBinarySearchTree(unittest.TestCase):
    def setUp(self):
        self.bst = BinarySearchTree()
        self.bst.insert_iteratively(50)
        self.bst.insert_iteratively(30)
        self.bst.insert_iteratively(70)
        self.bst.insert_iteratively(20)
        self.bst.insert_recursively(40)
        self.bst.insert_recursively(60)
        self.bst.insert_recursively(80)

    def test_insert_and_contains(self):
        self.assertTrue(self.bst.contains_recursively(50))
        self.assertTrue(self.bst.contains_iteratively(50))
        self.assertFalse(self.bst.contains_recursively(25))
        self.assertFalse(self.bst.contains_iteratively(25))

    def test_breadth_first_search(self):
        expected_output = [50, 30, 70, 20, 40, 60, 80]
        self.assertEqual(
            self.bst.breadth_first_search_iteratively(), expected_output
        )
        self.assertEqual(
            self.bst.breadth_first_search_recursively(), expected_output
        )

    def test_depth_first_search_pre_order(self):
        expected_output = [50, 30, 20, 40, 70, 60, 80]
        self.assertEqual(
            self.bst.depth_first_search_iteratively_pre_order(),
            expected_output,
        )
        self.assertEqual(
            self.bst.depth_first_search_recursively_pre_order(),
            expected_output,
        )

    def test_depth_first_search_post_order(self):
        expected_output = [20, 40, 30, 60, 80, 70, 50]
        self.assertEqual(
            self.bst.depth_first_search_iteratively_post_order(),
            expected_output,
        )
        self.assertEqual(
            self.bst.depth_first_search_recursively_post_order(),
            expected_output,
        )

    def test_depth_first_search_in_order(self):
        expected_output = [20, 30, 40, 50, 60, 70, 80]
        self.assertEqual(
            self.bst.depth_first_search_iteratively_in_order(), expected_output
        )
        self.assertEqual(
            self.bst.depth_first_search_recursively_in_order(), expected_output
        )


if __name__ == "__main__":
    unittest.main()
