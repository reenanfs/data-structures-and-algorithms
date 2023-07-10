export class Node<T> {
	constructor(public value: T, public next: Node<T> | null = null) {}
}

export class Stack<T> {
	top: Node<T> | null = null;
	length: number = 0;

	constructor() {}

	push(value: T) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.top = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}

		this.length++;
	}

	pop(): T | null {
		let removedNode = null;
		if (this.length === 0) {
			return removedNode;
		} else {
			removedNode = this.top;
			this.top = this.top!.next;
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
		return this.top!.value;
	}

	printStack() {
		const stackList = [];
		let currentNode = this.top;

		while (currentNode) {
			stackList.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return stackList;
	}
}
