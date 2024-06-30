class MaxBinaryHeap:
    def __init__(self):
        self.values = []

    def insert(self, value):
        self.values.append(value)
        self._bubble_up()

    def _bubble_up(self):
        index = len(self.values) - 1
        value = self.values[index]

        while index > 0:
            parent_index = (index - 1) // 2
            parent_value = self.values[parent_index]

            if parent_value >= value:
                break

            self.values[index] = parent_value
            self.values[parent_index] = value
            index = parent_index

    def remove(self):
        if len(self.values) == 0:
            return None

        max_value = self.values[0]
        end_value = self.values.pop()

        if len(self.values) > 0:
            self.values[0] = end_value
            self._sink_down(0)

        return max_value

    def _sink_down(self, index):
        length = len(self.values)
        value = self.values[index]

        while True:
            left_index = 2 * index + 1
            right_index = 2 * index + 2
            swap_index = None

            if left_index < length:
                left_value = self.values[left_index]
                if left_value > value:
                    swap_index = left_index

            if right_index < length:
                right_value = self.values[right_index]
                if (swap_index is None and right_value > value) or (swap_index is not None and right_value > self.values[swap_index]):
                    swap_index = right_index

            if swap_index is None:
                break

            self.values[index] = self.values[swap_index]
            self.values[swap_index] = value
            index = swap_index
