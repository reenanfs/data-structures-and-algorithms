class MinBinaryHeap:
    def __init__(self):
        self.values = []

    def insert(self, value):
        self.values.append(value)
        self.bubble_up(value)

    def bubble_up(self, value):
        index = len(self.values) - 1
        while index > 0:
            parent_index = (index - 1) // 2
            parent_value = self.values[parent_index]
            if parent_value <= value:
                break
            self.values[index] = parent_value
            self.values[parent_index] = value
            index = parent_index

    def remove(self):
        if len(self.values) == 0:
            return None

        removed = self.values[0]
        last_value = self.values.pop()

        if len(self.values) > 0:
            self.values[0] = last_value
            self.sink_down(0)

        return removed

    def sink_down(self, index):
        swap_index = index
        left_index = 2 * index + 1
        right_index = 2 * index + 2

        while True:
            if (left_index < len(self.values) and
                    self.values[swap_index] > self.values[left_index]):
                swap_index = left_index

            if (right_index < len(self.values) and
                    self.values[swap_index] > self.values[right_index]):
                swap_index = right_index

            if swap_index != index:
                self.values[index], self.values[swap_index] = self.values[swap_index], self.values[index]
                index = swap_index
                left_index = 2 * index + 1
                right_index = 2 * index + 2
            else:
                break

    def peek(self):
        return self.values[0] if len(self.values) > 0 else None
