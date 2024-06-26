import unittest
from adjacency_matrix_graph import AdjacencyMatrixGraph  # Assuming your class is in adjacency_matrix_graph.py


class TestAdjacencyMatrixGraph(unittest.TestCase):

    def setUp(self):
        self.graph = AdjacencyMatrixGraph()
        self.graph.add_vertex('A')
        self.graph.add_vertex('B')

    def test_add_vertex(self):
        self.graph.add_vertex('C')
        self.assertIn('C', self.graph.vertices)
        self.assertEqual(len(self.graph.matrix), 3)
        self.assertEqual(len(self.graph.matrix[0]), 3)

    def test_add_edge(self):
        self.graph.add_edge('A', 'B')
        index_a = self.graph.vertices.index('A')
        index_b = self.graph.vertices.index('B')
        self.assertEqual(self.graph.matrix[index_a][index_b], 1)
        self.assertEqual(self.graph.matrix[index_b][index_a], 1)

    def test_remove_vertex(self):
        self.graph.remove_vertex('A')
        self.assertNotIn('A', self.graph.vertices)
        self.assertEqual(len(self.graph.matrix), 1)
        self.assertEqual(len(self.graph.matrix[0]), 1)

    def test_remove_edge(self):
        self.graph.add_edge('A', 'B')
        self.graph.remove_edge('A', 'B')
        index_a = self.graph.vertices.index('A')
        index_b = self.graph.vertices.index('B')
        self.assertEqual(self.graph.matrix[index_a][index_b], 0)
        self.assertEqual(self.graph.matrix[index_b][index_a], 0)

    def test_add_vertex_already_exists(self):
        with self.assertRaises(ValueError):
            self.graph.add_vertex('A')

    def test_remove_vertex_not_found(self):
        with self.assertRaises(ValueError):
            self.graph.remove_vertex('C')

    def test_add_edge_vertex_not_found(self):
        with self.assertRaises(ValueError):
            self.graph.add_edge('A', 'C')

    def test_remove_edge_vertex_not_found(self):
        with self.assertRaises(ValueError):
            self.graph.remove_edge('A', 'C')


if __name__ == '__main__':
    unittest.main()
