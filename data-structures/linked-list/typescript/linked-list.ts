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

	append(value: T): void {
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

	printList(): T[] {
		const arrayList: T[] = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			arrayList.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arrayList;
	}
}
