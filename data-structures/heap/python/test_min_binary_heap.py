import unittest


class MinBinaryHeap:
    def __init__(self):
        self.values = []

    def insert(self, value):
        self.values.append(value)
        self.bubble_up(len(self.values) - 1)

    def bubble_up(self, index):
        parent_index = (index - 1) // 2
        while index > 0 and self.values[index] < self.values[parent_index]:
            self.values[index], self.values[parent_index] = self.values[parent_index], self.values[index]
            index = parent_index
            parent_index = (index - 1) // 2

    def remove(self):
        if len(self.values) == 0:
            return None
        if len(self.values) == 1:
            return self.values.pop()

        min_value = self.values[0]
        last_value = self.values.pop()
        self.values[0] = last_value
        self.sink_down(0)

        return min_value

    def sink_down(self, index):
        length = len(self.values)
        element = self.values[index]
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            swap = None

            if left_child_index < length:
                left_child = self.values[left_child_index]
                if left_child < element:
                    swap = left_child_index

            if right_child_index < length:
                right_child = self.values[right_child_index]
                if (swap is None and right_child < element) or (swap is not None and right_child < self.values[swap]):
                    swap = right_child_index

            if swap is None:
                break

            self.values[index] = self.values[swap]
            self.values[swap] = element
            index = swap

    def contains(self, value):
        return value in self.values


class TestMinBinaryHeap(unittest.TestCase):
    def setUp(self):
        self.heap = MinBinaryHeap()
        self.heap.insert(50)
        self.heap.insert(30)
        self.heap.insert(70)
        self.heap.insert(20)
        self.heap.insert(40)
        self.heap.insert(60)
        self.heap.insert(80)

    def test_insert_and_contains(self):
        self.assertTrue(self.heap.contains(50))
        self.assertFalse(self.heap.contains(25))

    def test_insert_multiple_elements_and_maintain_min_heap_property(self):
        expected_output = [20, 30, 60, 50, 40, 70, 80]
        self.assertEqual(self.heap.values, expected_output)

    def test_remove_the_minimum_element(self):
        self.assertEqual(self.heap.remove(), 20)
        expected_output = [30, 40, 60, 50, 80, 70]
        self.assertEqual(self.heap.values, expected_output)

    def test_remove_multiple_elements_in_ascending_order(self):
        expected_values = [20, 30, 40, 50, 60, 70, 80]
        for value in expected_values:
            self.assertEqual(self.heap.remove(), value)
        self.assertEqual(self.heap.values, [])

    def test_handle_removing_from_empty_heap(self):
        while self.heap.values:
            self.heap.remove()
        self.assertIsNone(self.heap.remove())

    def test_handle_duplicate_elements(self):
        self.heap.insert(70)
        self.heap.insert(70)
        expected_output = [20, 30, 60, 50, 40, 70, 80, 70, 70]
        self.assertEqual(self.heap.values, expected_output)

    def test_verify_heap_property_after_insertions(self):
        heap_values = self.heap.values
        for i in range(len(heap_values) // 2):
            left_child_index = 2 * i + 1
            right_child_index = 2 * i + 2
            if left_child_index < len(heap_values):
                self.assertLessEqual(heap_values[i], heap_values[left_child_index])
            if right_child_index < len(heap_values):
                self.assertLessEqual(heap_values[i], heap_values[right_child_index])


if __name__ == '__main__':
    unittest.main()
