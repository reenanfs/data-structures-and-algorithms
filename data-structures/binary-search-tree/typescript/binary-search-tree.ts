export class Node<T> {
	right: Node<T> | null = null;
	left: Node<T> | null = null;
	constructor(public value: T) {}
}

export class BinarySearchTree<T> {
	root: Node<T> | null = null;
	constructor() {}

	insertIteratively(value: T) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		let currentNode: Node<T> | null = this.root;
		while (currentNode) {
			if (value < currentNode.value) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return;
				}
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return;
				}
				currentNode = currentNode.right;
			}

			return;
		}
	}

	insertRecursively(value: T): void {
		this.root = this.insertRecursivelyHelper(this.root, value);
	}

	private insertRecursivelyHelper(node: Node<T> | null, value: T): Node<T> {
		if (!node) {
			return new Node(value);
		}

		if (value < node.value) {
			node.left = this.insertRecursivelyHelper(node.left, value);
		} else if (value > node.value) {
			node.right = this.insertRecursivelyHelper(node.right, value);
		}

		return node;
	}

	containsIteractively(value: T): boolean {
		if (!this.root) {
			return false;
		}

		let currentNode: Node<T> | null = this.root;
		while (currentNode) {
			if (currentNode.value === value) {
				return true;
			} else if (currentNode.value > value) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		return false;
	}

	containsRecursively(value: T): boolean {
		return this.containsRecursivelyHelper(this.root, value);
	}

	private containsRecursivelyHelper(node: Node<T> | null, value: T): boolean {
		if (!node) {
			return false;
		} else if (node.value === value) {
			return true;
		} else if (node.value > value) {
			return this.containsRecursivelyHelper(node.left, value);
		} else {
			return this.containsRecursivelyHelper(node.right, value);
		}
	}
}

const tree = new BinarySearchTree();

tree.insertIteratively(10);
tree.insertIteratively(10);

console.log(JSON.stringify(tree));
