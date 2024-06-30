import unittest
from max_binary_heap import MaxBinaryHeap  # Assuming MaxBinaryHeap is implemented in max_binary_heap.py


class TestMaxBinaryHeap(unittest.TestCase):
    def setUp(self):
        self.heap = MaxBinaryHeap()
        self.heap.insert(50)
        self.heap.insert(30)
        self.heap.insert(70)
        self.heap.insert(20)
        self.heap.insert(40)
        self.heap.insert(60)
        self.heap.insert(80)

    def test_insert_and_contains(self):
        self.assertTrue(50 in self.heap.values)
        self.assertFalse(25 in self.heap.values)

    def test_insert_multiple_elements_and_maintain_max_heap_property(self):
        expected_output = [80, 40, 70, 20, 30, 50, 60]
        self.assertEqual(self.heap.values, expected_output)

    def test_remove_the_maximum_element(self):
        self.assertEqual(self.heap.remove(), 80)
        expected_output = [70, 40, 60, 20, 30, 50]
        self.assertEqual(self.heap.values, expected_output)

    def test_remove_multiple_elements_in_descending_order(self):
        self.assertEqual(self.heap.remove(), 80)
        self.assertEqual(self.heap.remove(), 70)
        self.assertEqual(self.heap.remove(), 60)
        self.assertEqual(self.heap.remove(), 50)
        self.assertEqual(self.heap.remove(), 40)
        self.assertEqual(self.heap.remove(), 30)
        self.assertEqual(self.heap.remove(), 20)
        self.assertEqual(self.heap.values, [])

    def test_handle_removing_from_empty_heap(self):
        while self.heap.values:
            self.heap.remove()
        self.assertIsNone(self.heap.remove())

    def test_handle_duplicate_elements(self):
        self.heap.insert(70)
        self.heap.insert(70)
        expected_output = [80, 70, 70, 70, 30, 50, 60, 20, 40]
        self.assertEqual(self.heap.values, expected_output)

    def test_verify_heap_property_after_insertions(self):
        for i in range(len(self.heap.values) // 2):
            left_child_index = 2 * i + 1
            right_child_index = 2 * i + 2

            if left_child_index < len(self.heap.values):
                self.assertGreaterEqual(self.heap.values[i], self.heap.values[left_child_index])

            if right_child_index < len(self.heap.values):
                self.assertGreaterEqual(self.heap.values[i], self.heap.values[right_child_index])


if __name__ == '__main__':
    unittest.main()
