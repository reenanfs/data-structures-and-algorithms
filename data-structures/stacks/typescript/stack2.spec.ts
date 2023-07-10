import { Stack } from './stack2';

describe('Stack', () => {
	let stack: Stack<number>;

	beforeEach(() => {
		stack = new Stack<number>();
		stack.push(1);
		stack.push(2);
		stack.push(3);
	});

	test('push', () => {
		expect(stack.size()).toBe(3);
		expect(stack.peek()).toBe(3);

		stack.push(4);
		expect(stack.size()).toBe(4);
		expect(stack.peek()).toBe(4);
	});

	test('pop', () => {
		expect(stack.pop()).toBe(3);
		expect(stack.size()).toBe(2);
		expect(stack.peek()).toBe(2);

		stack.pop();
		expect(stack.size()).toBe(1);
		expect(stack.peek()).toBe(1);

		stack.pop();
		expect(stack.size()).toBe(0);
		expect(stack.peek()).toBeNull();

		// Test pop on an empty stack
		const emptyStack = new Stack<number>();
		expect(emptyStack.pop()).toBeNull();
		expect(emptyStack.size()).toBe(0);
		expect(emptyStack.peek()).toBeNull();
	});

	test('size', () => {
		expect(stack.size()).toBe(3);

		stack.push(4);
		expect(stack.size()).toBe(4);

		stack.pop();
		expect(stack.size()).toBe(3);

		stack.pop();
		expect(stack.size()).toBe(2);

		stack.pop();
		expect(stack.size()).toBe(1);

		stack.pop();
		expect(stack.size()).toBe(0);
	});

	test('peek', () => {
		expect(stack.peek()).toBe(3);

		stack.push(4);
		expect(stack.peek()).toBe(4);

		stack.pop();
		expect(stack.peek()).toBe(3);

		stack.pop();
		expect(stack.peek()).toBe(2);

		stack.pop();
		expect(stack.peek()).toBe(1);

		stack.pop();
		expect(stack.peek()).toBeNull();

		// Test peek on an empty stack
		const emptyStack = new Stack<number>();
		expect(emptyStack.peek()).toBeNull();
	});

	test('printStack', () => {
		expect(stack.printStack()).toEqual([3, 2, 1]);

		stack.push(4);
		expect(stack.printStack()).toEqual([4, 3, 2, 1]);

		stack.pop();
		expect(stack.printStack()).toEqual([3, 2, 1]);

		stack.pop();
		expect(stack.printStack()).toEqual([2, 1]);

		stack.pop();
		expect(stack.printStack()).toEqual([1]);

		stack.pop();
		expect(stack.printStack()).toEqual([]);

		// Test printStack on an empty stack
		const emptyStack = new Stack<number>();
		expect(emptyStack.printStack()).toEqual([]);
	});
});
