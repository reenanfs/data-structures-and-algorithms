import { Tree } from './tree';

describe('TestTree', () => {
	let tree: Tree<string>;

	beforeEach(() => {
		tree = new Tree();
		tree.createRoot('A');

		tree.root!.insert('B');
		tree.root!.insert('C');
		tree.root!.insert('D');
		tree.root!.insert('E');

		tree.root!.children[0].insert('F');
		tree.root!.children[0].insert('G');
		tree.root!.children[2].insert('H');
	});

	test('insert', () => {
		tree.root!.children[0].children[0].insert('I');
		expect(tree.root!.children[0].children[0].children.length).toBe(1);
		expect(tree.root!.children[0].children[0].children[0].value).toBe('I');
	});

	test('remove', () => {
		tree.root!.children[0].remove('F');
		tree.root!.children[2].remove('H');
		expect(tree.root!.children[0].children.length).toBe(1);
		expect(tree.root!.children[2].children.length).toBe(0);
	});
});
