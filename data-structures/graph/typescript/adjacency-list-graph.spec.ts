import { AdjacencyListGraph } from './adjacency-list-graph';

describe('AdjacencyListGraph', () => {
	let graph: AdjacencyListGraph;

	beforeEach(() => {
		graph = new AdjacencyListGraph();
		graph.addVertex('A');
		graph.addVertex('B');
		graph.addEdge('A', 'B');
	});

	describe('addVertex', () => {
		it('should add a vertex to the graph', () => {
			graph.addVertex('C');
			expect(graph['graph']['C']).toEqual([]);
		});
	});

	describe('addEdge', () => {
		it('should add an edge between two vertices', () => {
			expect(graph['graph']['A']).toContain('B');
			expect(graph['graph']['B']).toContain('A');
		});

		it('should throw an error if vertex is not found', () => {
			expect(() => graph.addEdge('A', 'C')).toThrowError(
				'Vertex not found in the graph'
			);
		});
	});

	describe('removeVertex', () => {
		it('should remove a vertex from the graph', () => {
			graph.removeVertex('A');
			expect(graph['graph']['A']).toBeUndefined();
		});

		it('should throw an error if vertex is not found', () => {
			expect(() => graph.removeVertex('C')).toThrowError(
				'Vertex not found in the graph'
			);
		});
	});

	describe('removeEdge', () => {
		it('should remove an edge between two vertices', () => {
			graph.removeEdge('A', 'B');
			expect(graph['graph']['A']).not.toContain('B');
			expect(graph['graph']['B']).not.toContain('A');
		});

		it('should throw an error if vertex is not found', () => {
			expect(() => graph.removeEdge('A', 'C')).toThrowError(
				'Vertex not found in the graph'
			);
		});
	});

	describe('depthFirstSearchRecursive', () => {
		it('should perform DFS recursively from the initial vertex', () => {
			const result = graph.depthFirstSearchRecursive('A');
			expect(result).toEqual(new Set(['A', 'B']));
		});

		it('should throw an error if initial vertex is not found', () => {
			expect(() => graph.depthFirstSearchRecursive('C')).toThrowError(
				'Vertex not found in the graph'
			);
		});
	});

	describe('depthFirstSearchIterative', () => {
		it('should perform DFS iteratively from the initial vertex', () => {
			const result = graph.depthFirstSearchIterative('A');
			expect(result).toEqual(new Set(['A', 'B']));
		});

		it('should throw an error if initial vertex is not found', () => {
			expect(() => graph.depthFirstSearchIterative('C')).toThrowError(
				'Vertex not found in the graph'
			);
		});
	});

	describe('breadthFirstSearch', () => {
		it('should perform BFS from the initial vertex', () => {
			const result = graph.breadthFirstSearch('A');
			expect(result).toEqual(new Set(['A', 'B']));
		});

		it('should throw an error if initial vertex is not found', () => {
			expect(() => graph.breadthFirstSearch('C')).toThrowError(
				'Vertex not found in the graph'
			);
		});
	});
});
