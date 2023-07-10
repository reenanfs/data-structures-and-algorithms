export class Stack<T> {
	private stack: T[] = [];
	constructor() {}

	push(value: T) {
		this.stack.push(value);
	}

	pop(): T | null {
		if (!this.stack.length) {
			return null;
		}
		return this.stack.pop()!;
	}

	size(): number {
		return this.stack.length;
	}

	peek(): T | null {
		if (!this.stack.length) {
			return null;
		}
		return this.stack[this.stack.length - 1];
	}

	printStack() {
		return this.stack;
	}
}
