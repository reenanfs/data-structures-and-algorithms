export class Node<T> {
	next: Node<T> | null = null;
	constructor(public value: T) {}
}

export class Queue<T> {
	rear: Node<T> | null = null;
	front: Node<T> | null = null;
	length: number = 0;

	enqueue(value: T) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.rear = newNode;
			this.front = newNode;
		} else {
			this.rear!.next = newNode;
			this.rear = newNode;
		}

		this.length++;
	}

	dequeue(): T | null {
		if (this.length === 0) {
			return null;
		}

		const removedNode = this.front;
		this.front = this.front!.next;

		removedNode!.next = null;

		this.length--;
		return removedNode!.value;
	}

	size(): number {
		return this.length;
	}

	peek(): T | null {
		return this.front ? this.front.value : null;
	}

	printQueue(): T[] {
		const queueList = [];
		let currentNode = this.front;

		while (currentNode) {
			queueList.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return queueList;
	}
}
