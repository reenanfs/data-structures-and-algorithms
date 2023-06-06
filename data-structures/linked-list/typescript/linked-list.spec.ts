import { LinkedList } from './linked-list';

describe('LinkedList', () => {
	it('should append values correctly', () => {
		const linkedList = new LinkedList(10);
		linkedList.append(20);
		linkedList.append(30);

		expect(linkedList.printList()).toEqual([10, 20, 30]);
		expect(linkedList.length).toBe(3);
	});

	it('should append multiple values correctly', () => {
		const linkedList = new LinkedList(10);
		linkedList.append(20);
		linkedList.append(30);
		linkedList.append(40);
		linkedList.append(50);

		expect(linkedList.printList()).toEqual([10, 20, 30, 40, 50]);
		expect(linkedList.length).toBe(5);
	});

	it('should append values and print list correctly', () => {
		const linkedList = new LinkedList(10);
		linkedList.append(20);
		linkedList.append(30);
		linkedList.append(40);

		const expectedOutput = [10, 20, 30, 40];
		expect(linkedList.printList()).toEqual(expectedOutput);
	});
});
