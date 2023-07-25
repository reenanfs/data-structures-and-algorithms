import unittest
from tree import Tree


class TestTree(unittest.TestCase):
    def setUp(self):
        self.tree = Tree()
        self.tree.create_root("A")

        self.tree.root.insert("B")
        self.tree.root.insert("C")
        self.tree.root.insert("D")
        self.tree.root.insert("E")

        self.tree.root.children[0].insert("F")
        self.tree.root.children[0].insert("G")
        self.tree.root.children[2].insert("H")

    def test_insert(self):
        self.tree.root.children[0].children[0].insert("I")
        self.assertEqual(
            len(self.tree.root.children[0].children[0].children), 1
        )
        self.assertEqual(
            self.tree.root.children[0].children[0].children[0].value, "I"
        )

    def test_remove(self):
        self.tree.root.children[0].remove("F")
        self.tree.root.children[2].remove("H")
        self.assertEqual(len(self.tree.root.children[0].children), 1)
        self.assertEqual(len(self.tree.root.children[2].children), 0)


if __name__ == "__main__":
    unittest.main()
