import unittest
from adjacency_list_graph import AdjacencyListGraph  # Assuming your class is in adjacency_list_graph.py


class TestAdjacencyListGraph(unittest.TestCase):

    def setUp(self):
        self.graph = AdjacencyListGraph()
        self.graph.add_vertex('A')
        self.graph.add_vertex('B')
        self.graph.add_edge('A', 'B')

    def test_add_vertex(self):
        self.graph.add_vertex('C')
        self.assertIn('C', self.graph.graph)
        self.assertEqual(self.graph.graph['C'], [])

    def test_add_edge(self):
        self.assertIn('B', self.graph.graph['A'])
        self.assertIn('A', self.graph.graph['B'])

    def test_remove_vertex(self):
        self.graph.remove_vertex('A')
        self.assertNotIn('A', self.graph.graph)
        self.assertNotIn('A', self.graph.graph.get('B', []))

    def test_remove_edge(self):
        self.graph.remove_edge('A', 'B')
        self.assertNotIn('B', self.graph.graph['A'])
        self.assertNotIn('A', self.graph.graph['B'])

    def test_depth_first_search_recursive(self):
        result = self.graph.depth_first_search_recursive('A')
        self.assertEqual(result, ['A', 'B'])

    def test_depth_first_search_iterative(self):
        result = self.graph.depth_first_search_iterative('A')
        self.assertEqual(result, ['A', 'B'])

    def test_breadth_first_search(self):
        result = self.graph.breadth_first_search('A')
        self.assertEqual(result, ['A', 'B'])

    def test_add_edge_vertex_not_found(self):
        with self.assertRaises(ValueError):
            self.graph.add_edge('A', 'C')

    def test_remove_vertex_vertex_not_found(self):
        with self.assertRaises(ValueError):
            self.graph.remove_vertex('C')

    def test_remove_edge_vertex_not_found(self):
        with self.assertRaises(ValueError):
            self.graph.remove_edge('A', 'C')

    def test_depth_first_search_recursive_vertex_not_found(self):
        with self.assertRaises(ValueError):
            self.graph.depth_first_search_recursive('C')

    def test_depth_first_search_iterative_vertex_not_found(self):
        with self.assertRaises(ValueError):
            self.graph.depth_first_search_iterative('C')

    def test_breadth_first_search_vertex_not_found(self):
        with self.assertRaises(ValueError):
            self.graph.breadth_first_search('C')


if __name__ == '__main__':
    unittest.main()
