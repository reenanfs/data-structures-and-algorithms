import { BinarySearchTree, Node } from './binary-search-tree'; // Make sure to update the import path to match your file structure

describe('BinarySearchTree', () => {
	let bst: BinarySearchTree<number>;

	beforeEach(() => {
		bst = new BinarySearchTree<number>();
		bst.insertIteratively(50);
		bst.insertIteratively(30);
		bst.insertIteratively(70);
		bst.insertIteratively(20);
		bst.insertRecursively(40);
		bst.insertRecursively(60);
		bst.insertRecursively(80);
	});

	test('insert and contains', () => {
		expect(bst.containsRecursively(50)).toBe(true);
		expect(bst.containsIteratively(50)).toBe(true);
		expect(bst.containsRecursively(25)).toBe(false);
		expect(bst.containsIteratively(25)).toBe(false);
	});

	test('breadthFirstSearch', () => {
		const expectedOutput = [50, 30, 70, 20, 40, 60, 80];
		expect(bst.breadthFirstSearchIteratively()).toEqual(expectedOutput);
		expect(bst.breadthFirstSearchRecursively()).toEqual(expectedOutput);
	});

	test('depthFirstSearchPreOrder', () => {
		const expectedOutput = [50, 30, 20, 40, 70, 60, 80];
		expect(bst.depthFirstSearchIterativelyPreOrder()).toEqual(expectedOutput);
		expect(bst.depthFirstSearchRecursivelyPreOrder()).toEqual(expectedOutput);
	});

	test('depthFirstSearchPostOrder', () => {
		const expectedOutput = [20, 40, 30, 60, 80, 70, 50];
		expect(bst.depthFirstSearchIterativelyPostOrder()).toEqual(expectedOutput);
		expect(bst.depthFirstSearchRecursivelyPostOrder()).toEqual(expectedOutput);
	});

	test('depthFirstSearchInOrder', () => {
		const expectedOutput = [20, 30, 40, 50, 60, 70, 80];
		expect(bst.depthFirstSearchIterativelyInOrder()).toEqual(expectedOutput);
		expect(bst.depthFirstSearchRecursivelyInOrder()).toEqual(expectedOutput);
	});
});
