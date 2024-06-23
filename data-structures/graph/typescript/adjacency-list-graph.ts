interface Graph {
	[key: string]: string[];
}

class AdjacencyListGraph {
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
}

const graph = new AdjacencyListGraph();

graph.addVertex('Tokyo');
graph.addVertex('Toronto');
graph.addVertex('Rio');
graph.addEdge('Tokyo', 'Toronto');
graph.addEdge('Tokyo', 'Rio');
graph.removeEdge('Tokyo', 'Rio');

console.log(graph);
