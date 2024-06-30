import { MinBinaryHeap } from './min-binary-heap';

describe('MinBinaryHeap', () => {
	let heap: MinBinaryHeap;

	beforeEach(() => {
		heap = new MinBinaryHeap();
		heap.insert(50);
		heap.insert(30);
		heap.insert(70);
		heap.insert(20);
		heap.insert(40);
		heap.insert(60);
		heap.insert(80);
	});

	test('insert and contains', () => {
		expect(heap.values.includes(50)).toBe(true);
		expect(heap.values.includes(25)).toBe(false);
	});

	test('insert multiple elements and maintain min heap property', () => {
		const expectedOutput = [20, 30, 60, 50, 40, 70, 80];
		expect(heap.values).toEqual(expectedOutput);
	});

	test('remove the minimum element', () => {
		expect(heap.remove()).toEqual(20);
		const expectedOutput = [30, 40, 60, 50, 80, 70];
		expect(heap.values).toEqual(expectedOutput);
	});

	test('remove multiple elements in ascending order', () => {
		expect(heap.remove()).toEqual(20);
		expect(heap.remove()).toEqual(30);
		expect(heap.remove()).toEqual(40);
		expect(heap.remove()).toEqual(50);
		expect(heap.remove()).toEqual(60);
		expect(heap.remove()).toEqual(70);
		expect(heap.remove()).toEqual(80);
		expect(heap.values).toEqual([]);
	});

	test('handle removing from empty heap', () => {
		while (heap.values.length) {
			heap.remove();
		}
		expect(heap.remove()).toBeUndefined();
	});

	test('handle duplicate elements', () => {
		heap.insert(70);
		heap.insert(70);
		const expectedOutput = [20, 30, 60, 50, 40, 70, 80, 70, 70];
		expect(heap.values).toEqual(expectedOutput);
	});

	test('verify heap property after insertions', () => {
		for (let i = 0; i < Math.floor(heap.values.length / 2); i++) {
			const leftChildIndex = 2 * i + 1;
			const rightChildIndex = 2 * i + 2;

			if (leftChildIndex < heap.values.length) {
				expect(heap.values[i]).toBeLessThanOrEqual(heap.values[leftChildIndex]);
			}
			if (rightChildIndex < heap.values.length) {
				expect(heap.values[i]).toBeLessThanOrEqual(
					heap.values[rightChildIndex]
				);
			}
		}
	});
});
