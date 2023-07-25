export class Node<T> {
	value: T;
	children: Node<T>[];

	constructor(value: T) {
		this.value = value;
		this.children = [];
	}

	insert(value: T): void {
		const child = new Node<T>(value);
		this.children.push(child);
	}

	remove(value: T): void {
		this.children = this.children.filter(child => child.value !== value);
	}
}

export class Tree<T> {
	root: Node<T> | null;

	constructor() {
		this.root = null;
	}

	createRoot(value: T): void {
		const child = new Node<T>(value);
		this.root = child;
	}
}
