import unittest
from queue import Queue


class TestQueue(unittest.TestCase):
    def setUp(self):
        self.queue = Queue()
        self.queue.enqueue(1)
        self.queue.enqueue(2)
        self.queue.enqueue(3)

    def test_enqueue(self):
        self.assertEqual(self.queue.size(), 3)
        self.assertEqual(self.queue.peek(), 1)

        self.queue.enqueue(4)
        self.assertEqual(self.queue.size(), 4)
        self.assertEqual(self.queue.peek(), 1)

    def test_dequeue(self):
        self.assertEqual(self.queue.dequeue(), 1)
        self.assertEqual(self.queue.size(), 2)
        self.assertEqual(self.queue.peek(), 2)

        self.queue.dequeue()
        self.assertEqual(self.queue.size(), 1)
        self.assertEqual(self.queue.peek(), 3)

        self.queue.dequeue()
        self.assertEqual(self.queue.size(), 0)
        self.assertIsNone(self.queue.peek())

        # Test dequeue on an empty queue
        empty_queue = Queue()
        self.assertIsNone(empty_queue.dequeue())
        self.assertEqual(empty_queue.size(), 0)
        self.assertIsNone(empty_queue.peek())

    def test_size(self):
        self.assertEqual(self.queue.size(), 3)

        self.queue.enqueue(4)
        self.assertEqual(self.queue.size(), 4)

        self.queue.dequeue()
        self.assertEqual(self.queue.size(), 3)

        self.queue.dequeue()
        self.assertEqual(self.queue.size(), 2)

        self.queue.dequeue()
        self.assertEqual(self.queue.size(), 1)

        self.queue.dequeue()
        self.assertEqual(self.queue.size(), 0)

    def test_peek(self):
        self.assertEqual(self.queue.peek(), 1)

        self.queue.enqueue(4)
        self.assertEqual(self.queue.peek(), 1)

        self.queue.dequeue()
        self.assertEqual(self.queue.peek(), 2)

        self.queue.dequeue()
        self.assertEqual(self.queue.peek(), 3)

        self.queue.dequeue()
        self.assertEqual(self.queue.peek(), 4)

        self.queue.dequeue()
        self.assertIsNone(self.queue.peek())

        # Test peek on an empty queue
        empty_queue = Queue()
        self.assertIsNone(empty_queue.peek())

    def test_print_queue(self):
        self.assertEqual(self.queue.print_queue(), [1, 2, 3])

        self.queue.enqueue(4)
        self.assertEqual(self.queue.print_queue(), [1, 2, 3, 4])

        self.queue.dequeue()
        self.assertEqual(self.queue.print_queue(), [2, 3, 4])

        self.queue.dequeue()
        self.assertEqual(self.queue.print_queue(), [3, 4])

        self.queue.dequeue()
        self.assertEqual(self.queue.print_queue(), [4])

        self.queue.dequeue()
        self.assertEqual(self.queue.print_queue(), [])

        # Test print_queue on an empty queue
        empty_queue = Queue()
        self.assertEqual(empty_queue.print_queue(), [])


if __name__ == "__main__":
    unittest.main()
