export class Node<T> {
	next: Node<T> | null = null;
	constructor(public value: T) {}
}

export class Stack<T> {
	head: Node<T> | null = null;
	length: number = 0;

	constructor() {}

	push(value: T) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
	}

	pop(): T | null {
		let removedNode = null;
		if (this.length === 0) {
			return removedNode;
		} else {
			removedNode = this.head;
			this.head = this.head!.next;
			removedNode!.next = null;
		}

		this.length--;
		return removedNode!.value;
	}

	size(): number {
		return this.length;
	}

	peek(): T | null {
		if (this.length === 0) {
			return null;
		}
		return this.head!.value;
	}

	printStack() {
		const stackList = [];
		let currentNode = this.head;

		while (currentNode) {
			stackList.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return stackList;
	}
}
