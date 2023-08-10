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
			} else {
				return;
			}
		}
	}

	insertRecursively(value: T): void {
		const insertHelper = (node: Node<T> | null, value: T): Node<T> => {
			if (!node) {
				return new Node(value);
			}

			if (value < node.value) {
				node.left = insertHelper(node.left, value);
			} else if (value > node.value) {
				node.right = insertHelper(node.right, value);
			}

			return node;
		};

		this.root = insertHelper(this.root, value);
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
		const containsHelper = (node: Node<T> | null, value: T): boolean => {
			if (!node) {
				return false;
			} else if (node.value === value) {
				return true;
			} else if (node.value > value) {
				return containsHelper(node.left, value);
			} else {
				return containsHelper(node.right, value);
			}
		};
		return containsHelper(this.root, value);
	}

	breadthFirstSearchIteractively(): T[] {
		const queue: Node<T>[] = [];
		const valueList: T[] = [];

		if (!this.root) {
			return valueList;
		}

		queue.push(this.root);

		while (queue.length) {
			const currentNode = queue.shift()!;

			valueList.push(currentNode.value);

			if (currentNode.left) {
				queue.push(currentNode.left);
			}

			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}

		return valueList;
	}

	breadthFirstSearchRecursively(): T[] {
		const nodeList: T[] = [];

		if (!this.root) {
			return nodeList;
		}

		const traverse = (nodeQueue: Node<T>[]): T[] => {
			if (!nodeQueue.length) {
				return nodeList;
			}

			const currentNode = nodeQueue.shift()!;

			nodeList.push(currentNode.value);

			if (currentNode.left) {
				nodeQueue.push(currentNode.left);
			}

			if (currentNode.right) {
				nodeQueue.push(currentNode.right);
			}

			return traverse(nodeQueue);
		};

		const queue: Node<T>[] = [];
		queue.push(this.root);

		return traverse(queue);
	}
}

const tree = new BinarySearchTree<number>();

tree.insertRecursively(30);
tree.insertRecursively(10);
tree.insertRecursively(20);

tree.insertRecursively(40);
tree.insertRecursively(5);

const valueList = tree.breadthFirstSearchIteractively();
const valueList2 = tree.breadthFirstSearchRecursively();
console.log(valueList);
console.log(valueList2);
console.log(JSON.stringify(tree));
