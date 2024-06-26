from typing import Dict, List


class AdjacencyListGraph:
    def __init__(self):
        self.graph: Dict[str, List[str]] = {}

    def add_vertex(self, vertex: str) -> None:
        self.graph[vertex] = []

    def add_edge(self, vertex1: str, vertex2: str) -> None:
        if vertex1 not in self.graph or vertex2 not in self.graph:
            raise ValueError('Vertex not found in the graph')
        self.graph[vertex1].append(vertex2)
        self.graph[vertex2].append(vertex1)

    def remove_vertex(self, vertex: str) -> None:
        if vertex not in self.graph:
            raise ValueError('Vertex not found in the graph')

        for vertex_list in self.graph.values():
            if vertex in vertex_list:
                vertex_list.remove(vertex)

        del self.graph[vertex]

    def remove_edge(self, vertex1: str, vertex2: str) -> None:
        if vertex1 not in self.graph or vertex2 not in self.graph:
            raise ValueError('Vertex not found in the graph')

        if vertex2 in self.graph[vertex1]:
            self.graph[vertex1].remove(vertex2)

        if vertex1 in self.graph[vertex2]:
            self.graph[vertex2].remove(vertex1)

    def depth_first_search_recursive(self, initial_vertex: str) -> List[str]:
        if initial_vertex not in self.graph:
            raise ValueError('Vertex not found in the graph')

        visited = []

        def traverse(vertex: str) -> None:
            visited.append(vertex)
            for neighbor in self.graph[vertex]:
                if neighbor not in visited:
                    traverse(neighbor)

        traverse(initial_vertex)
        return visited

    def depth_first_search_iterative(self, initial_vertex: str) -> List[str]:
        if initial_vertex not in self.graph:
            raise ValueError('Vertex not found in the graph')

        visited = []
        stack = [initial_vertex]

        while stack:
            vertex = stack.pop()
            if vertex not in visited:
                visited.append(vertex)
                stack.extend([n for n in self.graph[vertex] if n not in visited])

        return visited

    def breadth_first_search(self, initial_vertex: str) -> List[str]:
        if initial_vertex not in self.graph:
            raise ValueError('Vertex not found in the graph')

        visited = []
        queue = [initial_vertex]

        while queue:
            vertex = queue.pop(0)
            if vertex not in visited:
                visited.append(vertex)
                queue.extend([n for n in self.graph[vertex] if n not in visited])

        return visited
