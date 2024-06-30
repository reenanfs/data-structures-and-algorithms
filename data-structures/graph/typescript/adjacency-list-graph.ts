interface Graph {
	[key: string]: string[];
}

export class AdjacencyListGraph {
	private graph: Graph;

	constructor() {
		this.graph = {};
	}

	addVertex(vertex: string): void {
		this.graph[vertex] = [];
	}

	addEdge(vertex1: string, vertex2: string): void {
		if (!this.graph[vertex1] || !this.graph[vertex2]) {
			throw new Error('Vertex not found in the graph');
		}
		this.graph[vertex1].push(vertex2);
		this.graph[vertex2].push(vertex1);
	}

	removeVertex(vertex: string): void {
		if (!this.graph[vertex]) {
			throw new Error('Vertex not found in the graph');
		}

		const verticesWithEdgeToDelete = this.graph[vertex];

		verticesWithEdgeToDelete.forEach(vertexWithEdgeToDelete => {
			this.graph[vertexWithEdgeToDelete] = this.graph[
				vertexWithEdgeToDelete
			].filter(edge => edge !== vertex);
		});

		delete this.graph[vertex];
	}

	removeEdge(vertex1: string, vertex2: string): void {
		if (!this.graph[vertex1] || !this.graph[vertex2]) {
			throw new Error('Vertex not found in the graph');
		}

		this.graph[vertex1] = this.graph[vertex1].filter(edge => edge !== vertex2);

		this.graph[vertex2] = this.graph[vertex2].filter(edge => edge !== vertex1);
	}

	depthFirstSearchRecursive(initialVertex: string): Set<string> {
		if (!this.graph[initialVertex]) {
			throw new Error('Vertex not found in the graph');
		}

		const visited: Set<string> = new Set();
		const traverse = (vertex: string): void => {
			visited.add(vertex);
			this.graph[vertex].forEach(neighbor => {
				if (!visited.has(neighbor)) {
					return traverse(neighbor);
				}
			});
		};

		traverse(initialVertex);
		return visited;
	}

	depthFirstSearchIterative(initialVertex: string): Set<string> {
		if (!this.graph[initialVertex]) {
			throw new Error('Vertex not found in the graph');
		}

		const visited: Set<string> = new Set();
		const stack: string[] = [];

		stack.push(initialVertex);

		while (stack.length) {
			let vertex: string | undefined = stack.pop();

			if (!vertex) {
				break;
			}

			visited.add(vertex);

			this.graph[vertex].forEach(neighbor => {
				if (!visited.has(neighbor)) {
					stack.push(neighbor);
				}
			});
		}

		return visited;
	}

	breadthFirstSearch(initialVertex: string): Set<string> {
		if (!this.graph[initialVertex]) {
			throw new Error('Vertex not found in the graph');
		}

		const visited: Set<string> = new Set();
		const queue: string[] = [];

		queue.push(initialVertex);

		while (queue.length) {
			const vertex: string | undefined = queue.shift();

			if (!vertex) {
				break;
			}

			visited.add(vertex);

			this.graph[vertex].forEach(neighbor => {
				if (!visited.has(neighbor)) {
					queue.push(neighbor);
				}
			});
		}

		return visited;
	}
}
