from typing import List


class AdjacencyMatrixGraph:
    def __init__(self):
        self.vertices: List[str] = []
        self.matrix: List[List[int]] = []

    def add_vertex(self, vertex: str) -> None:
        if vertex in self.vertices:
            raise ValueError('Vertex already exists')

        self.vertices.append(vertex)
        new_size = len(self.vertices)
        for row in self.matrix:
            row.append(0)
        self.matrix.append([0] * new_size)

    def add_edge(self, vertex1: str, vertex2: str) -> None:
        index1 = self.vertices.index(vertex1)
        index2 = self.vertices.index(vertex2)

        self.matrix[index1][index2] = 1
        self.matrix[index2][index1] = 1

    def remove_vertex(self, vertex: str) -> None:
        index = self.vertices.index(vertex)
        self.vertices.pop(index)
        self.matrix.pop(index)
        for row in self.matrix:
            row.pop(index)

    def remove_edge(self, vertex1: str, vertex2: str) -> None:
        index1 = self.vertices.index(vertex1)
        index2 = self.vertices.index(vertex2)

        self.matrix[index1][index2] = 0
        self.matrix[index2][index1] = 0
