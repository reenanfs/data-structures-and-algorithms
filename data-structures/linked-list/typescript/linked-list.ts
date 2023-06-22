class Node<T> {
	constructor(public value: T, public next: Node<T> | null = null) {}
}

export class LinkedList<T> {
	head: Node<T> | null;
	tail: Node<T> | null;
	length: number;

	constructor(value: T) {
		const newNode = new Node(value);
		this.head = newNode;
		this.tail = newNode;
		this.length = 1;
	}

	push(value: T): void {
		const newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
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

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			const previousNode = this.get(index - 1);
			const currentNode = previousNode!.next;

			previousNode!.next = newNode;
			newNode!.next = currentNode;
		}

		this.length++;
	}

	unshift(value: T) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
	}

	shift() {
		if (this.length === 0) {
			return null;
		}
		const returnedNode = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head!.next;
			returnedNode!.next = null;
		}

		this.length--;
		return returnedNode!.value;
	}

	pop() {
		if (!this.tail) {
			return null;
		}

		let removedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			const previousNode = this.get(this.length - 2);
			this.tail = previousNode;
			this.tail!.next = null;
		}

		this.length--;
		return removedNode.value;
	}

	remove(index: number) {
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
		removedNode!.next = null;

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

		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode!.next;
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
			arrayList.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arrayList;
	}

	reverse() {
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
			previousNode = currentNode;
			currentNode = nextNode;
		}
	}
}
