class AdjacencyMatrixGraph {
	private vertices: string[];
	private matrix: number[][];

	constructor() {
		this.vertices = [];
		this.matrix = [];
	}

	addVertex(vertex: string): void {
		if (this.vertices.includes(vertex)) {
			throw new Error('Vertex already exists');
		}

		this.vertices.push(vertex);

		const newSize = this.vertices.length;
		this.matrix.forEach(row => row.push(0));
		this.matrix.push(new Array(newSize).fill(0));
	}

	addEdge(vertex1: string, vertex2: string): void {
		const index1 = this.vertices.indexOf(vertex1);
		const index2 = this.vertices.indexOf(vertex2);

		if (index1 === -1 || index2 === -1) {
			throw new Error('Vertex not found in the graph');
		}

		this.matrix[index1][index2] = 1;
		this.matrix[index2][index1] = 1;
	}

	removeVertex(vertex: string): void {
		const index = this.vertices.indexOf(vertex);
		if (index === -1) {
			throw new Error('Vertex not found in the graph');
		}

		this.vertices.splice(index, 1);

		this.matrix.splice(index, 1);
		this.matrix.forEach(row => row.splice(index, 1));
	}

	removeEdge(vertex1: string, vertex2: string): void {
		const index1 = this.vertices.indexOf(vertex1);
		const index2 = this.vertices.indexOf(vertex2);

		if (index1 === -1 || index2 === -1) {
			throw new Error('Vertex not found in the graph');
		}

		this.matrix[index1][index2] = 0;
		this.matrix[index2][index1] = 0;
	}
}

const matrixGraph = new AdjacencyMatrixGraph();

matrixGraph.addVertex('Tokyo');
matrixGraph.addVertex('Toronto');
matrixGraph.addVertex('Rio');
matrixGraph.addEdge('Tokyo', 'Toronto');
matrixGraph.addEdge('Tokyo', 'Rio');
matrixGraph.removeEdge('Tokyo', 'Rio');

console.log(matrixGraph);
