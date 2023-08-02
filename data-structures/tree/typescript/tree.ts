export class Node<T> {
	children: Node<T>[] = [];

	constructor(public value: T) {
		this.value = value;
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
