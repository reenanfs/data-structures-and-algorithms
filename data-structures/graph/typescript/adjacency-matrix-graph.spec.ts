import { AdjacencyMatrixGraph } from './adjacency-matrix-graph';

describe('AdjacencyMatrixGraph', () => {
	let graph: AdjacencyMatrixGraph;

	beforeEach(() => {
		graph = new AdjacencyMatrixGraph();
		graph.addVertex('A');
		graph.addVertex('B');
	});

	test('addVertex should add a vertex', () => {
		graph.addVertex('C');
		expect(graph.vertices.includes('C')).toBe(true);
		expect(graph.matrix.length).toBe(3);
		expect(graph.matrix[0].length).toBe(3);
	});

	test('addEdge should add an edge between vertices', () => {
		graph.addEdge('A', 'B');
		const indexA = graph.vertices.indexOf('A');
		const indexB = graph.vertices.indexOf('B');
		expect(graph.matrix[indexA][indexB]).toBe(1);
		expect(graph.matrix[indexB][indexA]).toBe(1);
	});

	test('removeVertex should remove a vertex', () => {
		graph.removeVertex('A');
		expect(graph.vertices.includes('A')).toBe(false);
		expect(graph.matrix.length).toBe(1);
		expect(graph.matrix[0].length).toBe(1);
	});

	test('removeEdge should remove an edge between vertices', () => {
		graph.addEdge('A', 'B');
		graph.removeEdge('A', 'B');
		const indexA = graph.vertices.indexOf('A');
		const indexB = graph.vertices.indexOf('B');
		expect(graph.matrix[indexA][indexB]).toBe(0);
		expect(graph.matrix[indexB][indexA]).toBe(0);
	});

	test('addVertex should throw error if vertex already exists', () => {
		expect(() => graph.addVertex('A')).toThrowError('Vertex already exists');
	});

	test('removeVertex should throw error if vertex not found', () => {
		expect(() => graph.removeVertex('C')).toThrowError(
			'Vertex not found in the graph'
		);
	});

	test('addEdge should throw error if vertex not found', () => {
		expect(() => graph.addEdge('A', 'C')).toThrowError(
			'Vertex not found in the graph'
		);
	});

	test('removeEdge should throw error if vertex not found', () => {
		expect(() => graph.removeEdge('A', 'C')).toThrowError(
			'Vertex not found in the graph'
		);
	});
});
