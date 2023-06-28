import { LinkedList } from './doubly-linked-list';

describe('LinkedList', () => {
	let linkedList: LinkedList<number>;

	beforeEach(() => {
		linkedList = new LinkedList();
		linkedList.push(10);
		linkedList.push(20);
		linkedList.push(30);
	});

	test('push', () => {
		// Test one push
		linkedList.push(40);
		const expectedOutput = [10, 20, 30, 40];
		expect(linkedList.printList()).toEqual(expectedOutput);
		expect(linkedList.head!.value).toEqual(10);
		expect(linkedList.tail!.value).toEqual(40);
		expect(linkedList.length).toEqual(4);

		// Test multiple pushs
		linkedList.push(50);
		linkedList.push(60);

		const expectedOutput2 = [10, 20, 30, 40, 50, 60];
		expect(linkedList.printList()).toEqual(expectedOutput2);
		expect(linkedList.head!.value).toEqual(10);
		expect(linkedList.tail!.value).toEqual(60);
		expect(linkedList.length).toEqual(6);
	});

	test('insert', () => {
		// Test positive index values
		linkedList.insert(1, 15);
		let expectedOutput = [10, 15, 20, 30];
		expect(linkedList.printList()).toEqual(expectedOutput);
		expect(linkedList.head!.value).toEqual(10);
		expect(linkedList.tail!.value).toEqual(30);
		expect(linkedList.length).toEqual(4);

		linkedList.insert(0, 0);
		linkedList.insert(5, 35);
		expectedOutput = [0, 10, 15, 20, 30, 35];
		expect(linkedList.printList()).toEqual(expectedOutput);
		expect(linkedList.head!.value).toEqual(0);
		expect(linkedList.tail!.value).toEqual(35);
		expect(linkedList.length).toEqual(6);

		// Test negative index value
		linkedList.insert(-1, 5);
		expectedOutput = [5, 0, 10, 15, 20, 30, 35];
		expect(linkedList.printList()).toEqual(expectedOutput);
		expect(linkedList.head!.value).toEqual(5);
		expect(linkedList.tail!.value).toEqual(35);
		expect(linkedList.length).toEqual(7);

		// Test index value greater than list size
		linkedList.insert(8, 40);
		expectedOutput = [5, 0, 10, 15, 20, 30, 35, 40];
		expect(linkedList.printList()).toEqual(expectedOutput);
		expect(linkedList.head!.value).toEqual(5);
		expect(linkedList.tail!.value).toEqual(40);
		expect(linkedList.length).toEqual(8);

		while (linkedList.length > 0) {
			linkedList.pop();
		}

		// Test when there is no node
		linkedList.insert(0, 10);
		expectedOutput = [10];
		expect(linkedList.printList()).toEqual(expectedOutput);
		expect(linkedList.head!.value).toEqual(10);
		expect(linkedList.tail!.value).toEqual(10);
		expect(linkedList.length).toEqual(1);
	});

	test('unshift', () => {
		// Clear the list
		while (linkedList.length > 0) {
			linkedList.pop();
		}

		// Test one unshift
		linkedList.unshift(30);
		const expectedOutput1 = [30];
		expect(linkedList.printList()).toEqual(expectedOutput1);
		expect(linkedList.head!.value).toEqual(30);
		expect(linkedList.tail!.value).toEqual(30);
		expect(linkedList.length).toEqual(1);

		// Test several unshifts
		linkedList.unshift(20);
		linkedList.unshift(10);
		const expectedOutput2 = [10, 20, 30];
		expect(linkedList.printList()).toEqual(expectedOutput2);
		expect(linkedList.head!.value).toEqual(10);
		expect(linkedList.tail!.value).toEqual(30);
		expect(linkedList.length).toEqual(3);
	});

	test('shift', () => {
		// Test on a linked list with several values
		let returnedNode = linkedList.shift();
		let expectedOutput = [20, 30];
		expect(linkedList.printList()).toEqual(expectedOutput);
		expect(returnedNode).toEqual(10);
		expect(linkedList.head!.value).toEqual(20);
		expect(linkedList.tail!.value).toEqual(30);
		expect(linkedList.length).toEqual(2);

		returnedNode = linkedList.shift();
		expectedOutput = [30];
		expect(linkedList.printList()).toEqual(expectedOutput);
		expect(returnedNode).toEqual(20);
		expect(linkedList.head!.value).toEqual(30);
		expect(linkedList.tail!.value).toEqual(30);
		expect(linkedList.length).toEqual(1);

		// Test on a linked list with one element
		returnedNode = linkedList.shift();
		expectedOutput = [];
		expect(linkedList.printList()).toEqual(expectedOutput);
		expect(returnedNode).toEqual(30);
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
		expect(linkedList.length).toEqual(0);

		// Test on an empty linked list
		returnedNode = linkedList.shift();
		expectedOutput = [];
		expect(linkedList.printList()).toEqual(expectedOutput);
		expect(returnedNode).toBeNull();
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
		expect(linkedList.length).toEqual(0);
	});

	test('pop', () => {
		// Test on a linked list with several values
		let returnedNode = linkedList.pop();
		const expectedOutput1 = [10, 20];
		expect(linkedList.printList()).toEqual(expectedOutput1);
		expect(returnedNode).toEqual(30);
		expect(linkedList.head!.value).toEqual(10);
		expect(linkedList.tail!.value).toEqual(20);
		expect(linkedList.length).toEqual(2);

		returnedNode = linkedList.pop();
		const expectedOutput2 = [10];
		expect(linkedList.printList()).toEqual(expectedOutput2);
		expect(returnedNode).toEqual(20);
		expect(linkedList.head!.value).toEqual(10);
		expect(linkedList.tail!.value).toEqual(10);
		expect(linkedList.length).toEqual(1);

		// Test on a linked list with one element
		returnedNode = linkedList.pop();
		const expectedOutput3: number[] = [];
		expect(linkedList.printList()).toEqual(expectedOutput3);
		expect(returnedNode).toEqual(10);
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
		expect(linkedList.length).toEqual(0);

		// Test on an empty linked list
		returnedNode = linkedList.pop();
		const expectedOutput4: number[] = [];
		expect(linkedList.printList()).toEqual(expectedOutput4);
		expect(returnedNode).toBeNull();
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
		expect(linkedList.length).toEqual(0);
	});

	test('remove', () => {
		// Test positive index values
		let returnedNode = linkedList.remove(1);
		const expectedOutput1 = [10, 30];
		expect(returnedNode).toEqual(20);
		expect(linkedList.printList()).toEqual(expectedOutput1);
		expect(linkedList.head!.value).toEqual(10);
		expect(linkedList.tail!.value).toEqual(30);
		expect(linkedList.length).toEqual(2);

		const firstReturnedNode = linkedList.remove(0);
		const secondReturnedNode = linkedList.remove(0);
		const expectedOutput2: number[] = [];
		expect(firstReturnedNode).toEqual(10);
		expect(secondReturnedNode).toEqual(30);
		expect(linkedList.printList()).toEqual(expectedOutput2);
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
		expect(linkedList.length).toEqual(0);

		// Test on an empty linked list
		returnedNode = linkedList.remove(5);
		const expectedOutput3: number[] = [];
		expect(linkedList.printList()).toEqual(expectedOutput3);
		expect(returnedNode).toBeNull();
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
		expect(linkedList.length).toEqual(0);

		for (let value = 10; value <= 30; value += 10) {
			linkedList.push(value);
		}

		// Test index value greater than list size
		returnedNode = linkedList.remove(8);
		const expectedOutput4 = [10, 20];
		expect(linkedList.printList()).toEqual(expectedOutput4);
		expect(linkedList.head!.value).toEqual(10);
		expect(linkedList.tail!.value).toEqual(20);
		expect(linkedList.length).toEqual(2);

		// Test when index is negative
		linkedList.remove(-2);
		const expectedOutput5 = [20];
		expect(linkedList.printList()).toEqual(expectedOutput5);
		expect(linkedList.head!.value).toEqual(20);
		expect(linkedList.tail!.value).toEqual(20);
		expect(linkedList.length).toEqual(1);
	});

	test('get', () => {
		// Test positive index values
		const firstNode = linkedList.get(0);
		const secondNode = linkedList.get(1);
		const thirdNode = linkedList.get(2);

		expect(firstNode!.value).toEqual(10);
		expect(secondNode!.value).toEqual(20);
		expect(thirdNode!.value).toEqual(30);

		// Test negative index value
		expect(() => linkedList.get(-1)).toThrowError();

		// Test index value greater than list size
		expect(() => linkedList.get(3)).toThrowError();

		for (let i = 0; i < linkedList.length; i++) {
			linkedList.pop();
		}
	});

	test('setValue', () => {
		// Test positive index values
		let returnedNode = linkedList.setValue(0, 30);
		const expectedOutput1 = [30, 20, 30];
		expect(returnedNode.value).toEqual(30);
		expect(linkedList.printList()).toEqual(expectedOutput1);
		expect(linkedList.head!.value).toEqual(30);
		expect(linkedList.tail!.value).toEqual(30);
		expect(linkedList.length).toEqual(3);

		returnedNode = linkedList.setValue(1, -20);
		const expectedOutput2 = [30, -20, 30];
		expect(returnedNode.value).toEqual(-20);
		expect(linkedList.printList()).toEqual(expectedOutput2);
		expect(linkedList.head!.value).toEqual(30);
		expect(linkedList.tail!.value).toEqual(30);
		expect(linkedList.length).toEqual(3);

		returnedNode = linkedList.setValue(2, 10);
		const expectedOutput3 = [30, -20, 10];
		expect(returnedNode.value).toEqual(10);
		expect(linkedList.printList()).toEqual(expectedOutput3);
		expect(linkedList.head!.value).toEqual(30);
		expect(linkedList.tail!.value).toEqual(10);
		expect(linkedList.length).toEqual(3);

		// Test negative index value
		expect(() => linkedList.setValue(-1, 10)).toThrowError();

		// Test index value greater than list size
		expect(() => linkedList.setValue(3, 40)).toThrowError();

		linkedList.pop();
		linkedList.pop();
		linkedList.pop();

		// Test when there is no node to set
		expect(() => linkedList.setValue(0, 30)).toThrowError();
	});

	test('reverse', () => {
		// Test on a linked list with several values
		linkedList.reverse();
		const expectedOutput1 = [30, 20, 10];
		expect(linkedList.printList()).toEqual(expectedOutput1);
		expect(linkedList.head!.value).toEqual(30);
		expect(linkedList.tail!.value).toEqual(10);
		expect(linkedList.length).toEqual(3);

		while (linkedList.length > 0) {
			linkedList.pop();
		}

		linkedList.reverse();
		const expectedOutput2: number[] = [];
		expect(linkedList.printList()).toEqual(expectedOutput2);
		expect(linkedList.head).toBeNull();
		expect(linkedList.tail).toBeNull();
		expect(linkedList.length).toEqual(0);
	});
});
