import { Queue } from './queue';

describe('Queue', () => {
	let queue: Queue<number>;

	beforeEach(() => {
		queue = new Queue<number>();
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
	});

	test('enqueue', () => {
		expect(queue.size()).toBe(3);
		expect(queue.peek()).toBe(1);

		queue.enqueue(4);
		expect(queue.size()).toBe(4);
		expect(queue.peek()).toBe(1);
	});

	test('dequeue', () => {
		expect(queue.dequeue()).toBe(1);
		expect(queue.size()).toBe(2);
		expect(queue.peek()).toBe(2);

		queue.dequeue();
		expect(queue.size()).toBe(1);
		expect(queue.peek()).toBe(3);

		queue.dequeue();
		expect(queue.size()).toBe(0);
		expect(queue.peek()).toBeNull();

		// Test dequeue on an empty queue
		const emptyQueue = new Queue<number>();
		expect(emptyQueue.dequeue()).toBeNull();
		expect(emptyQueue.size()).toBe(0);
		expect(emptyQueue.peek()).toBeNull();
	});

	test('size', () => {
		expect(queue.size()).toBe(3);

		queue.enqueue(4);
		expect(queue.size()).toBe(4);

		queue.dequeue();
		expect(queue.size()).toBe(3);

		queue.dequeue();
		expect(queue.size()).toBe(2);

		queue.dequeue();
		expect(queue.size()).toBe(1);

		queue.dequeue();
		expect(queue.size()).toBe(0);
	});

	test('peek', () => {
		expect(queue.peek()).toBe(1);

		queue.enqueue(4);
		expect(queue.peek()).toBe(1);

		queue.dequeue();
		expect(queue.peek()).toBe(2);

		queue.dequeue();
		expect(queue.peek()).toBe(3);

		queue.dequeue();
		expect(queue.peek()).toBe(4);

		queue.dequeue();
		expect(queue.peek()).toBeNull();

		// Test peek on an empty queue
		const emptyQueue = new Queue<number>();
		expect(emptyQueue.peek()).toBeNull();
	});

	test('printQueue', () => {
		expect(queue.printQueue()).toEqual([1, 2, 3]);

		queue.enqueue(4);
		expect(queue.printQueue()).toEqual([1, 2, 3, 4]);

		queue.dequeue();
		expect(queue.printQueue()).toEqual([2, 3, 4]);

		queue.dequeue();
		expect(queue.printQueue()).toEqual([3, 4]);

		queue.dequeue();
		expect(queue.printQueue()).toEqual([4]);

		queue.dequeue();
		expect(queue.printQueue()).toEqual([]);

		// Test printQueue on an empty queue
		const emptyQueue = new Queue<number>();
		expect(emptyQueue.printQueue()).toEqual([]);
	});
});
