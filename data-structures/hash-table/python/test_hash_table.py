import unittest
from hash_table import HashTable  # Assuming your HashTable class is in a file named hash_table.py


class TestHashTable(unittest.TestCase):

    def setUp(self):
        self.hash_table = HashTable(10)
        self.hash_table.set('one', 1)
        self.hash_table.set('two', 2)
        self.hash_table.set('three', 3)

    def test_set_and_get(self):
        self.assertEqual(self.hash_table.get('one'), 1)
        self.assertEqual(self.hash_table.get('two'), 2)
        self.assertEqual(self.hash_table.get('three'), 3)
        self.assertIsNone(self.hash_table.get('four'))

    def test_remove(self):
        self.hash_table.remove('two')
        self.assertEqual(self.hash_table.get('one'), 1)
        self.assertIsNone(self.hash_table.get('two'))
        self.assertEqual(self.hash_table.get('three'), 3)

    def test_keys(self):
        keys = self.hash_table.keys()
        self.assertIn('one', keys)
        self.assertIn('two', keys)
        self.assertIn('three', keys)

    def test_values(self):
        values = self.hash_table.values()
        self.assertIn(1, values)
        self.assertIn(2, values)
        self.assertIn(3, values)


if __name__ == '__main__':
    unittest.main()
