class Node<T> {
	constructor(
		public value: T | null = null,
		public next: Node<T> | null = null,
		public prev: Node<T> | null = null
	) {}
}

export class LinkedList<T> {
	head: Node<T> | null;
	tail: Node<T> | null;
	length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value: T): void {
		const newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail!.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	insert(index: number, value: T): void {
		if (index <= 0) {
			return this.unshift(value);
		} else if (index > this.length - 1) {
			return this.push(value);
		}

		const newNode = new Node(value);

		const previousNode = this.get(index - 1);
		const currentNode = previousNode!.next;

		previousNode!.next = newNode;
		currentNode!.prev = newNode;

		newNode!.next = currentNode;
		newNode!.prev = previousNode;

		this.length++;
	}

	unshift(value: T): void {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head!.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
	}

	shift(): T | null {
		if (this.length === 0) {
			return null;
		}
		const returnedNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			const nextNode = this.head!.next;
			this.head = nextNode;
			nextNode!.prev = null;
			returnedNode!.next = null;
		}

		this.length--;
		return returnedNode!.value;
	}

	pop(): T | null {
		if (!this.tail) {
			return null;
		}

		let removedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			const previousNode = this.tail.prev;
			this.tail = previousNode;
			this.tail!.next = null;
			removedNode.prev = null;
		}

		this.length--;
		return removedNode.value;
	}

	remove(index: number): T | null {
		if (this.length === 0) {
			return null;
		}

		if (index <= 0) {
			return this.shift();
		} else if (index >= this.length - 1) {
			return this.pop();
		}
		const previousNode = this.get(index - 1);
		const removedNode = previousNode!.next;
		const nextNode = removedNode!.next;

		previousNode!.next = nextNode;
		nextNode!.prev = previousNode;

		removedNode!.next = null;
		removedNode!.prev = null;

		this.length--;
		return removedNode!.value;
	}

	get(index: number): Node<T> | null {
		if (index < 0 || index > this.length - 1) {
			throw new Error('Index out of bounds.');
		} else if (index === 0) {
			return this.head;
		} else if (index === this.length - 1) {
			return this.tail;
		}

		let currentNode: Node<T>;
		if (index < this.length / 2) {
			currentNode = this.head!;
			for (let i = 0; i < index; i++) {
				currentNode = currentNode!.next!;
			}
		} else {
			currentNode = this.tail!;
			for (let i = this.length - 1; i > index; i--) {
				currentNode = currentNode!.next!;
			}
		}

		return currentNode!;
	}

	setValue(index: number, value: T): Node<T> {
		const currentNode = this.get(index);
		currentNode!.value = value;
		return currentNode!;
	}

	printList(): T[] {
		const arrayList: T[] = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			arrayList.push(currentNode.value as T);
			currentNode = currentNode.next;
		}
		return arrayList;
	}

	reverse(): void {
		if (this.length <= 1) {
			return;
		}

		let currentNode = this.head;
		let previousNode = null;
		let nextNode = null;

		[this.head, this.tail] = [this.tail, this.head];

		while (currentNode) {
			nextNode = currentNode.next;
			currentNode.next = previousNode;
			currentNode.prev = nextNode;
			previousNode = currentNode;
			currentNode = nextNode;
		}
	}
}
