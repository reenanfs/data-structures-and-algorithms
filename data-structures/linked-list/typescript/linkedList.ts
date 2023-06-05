class Node<T> {
	constructor(public value: T, public next: Node<T> | null = null) {}
}

export class LinkedList<T> {
	head: Node<T>;
	tail: Node<T>;
	length: number;

	constructor(value: T) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}
}
