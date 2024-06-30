import { HashTable } from './hash-table';

describe('HashTable', () => {
	let hashTable: HashTable<number>;

	beforeEach(() => {
		hashTable = new HashTable(10);

		hashTable.set('one', 1);
		hashTable.set('two', 2);
		hashTable.set('three', 3);
	});

	test('set and get', () => {
		expect(hashTable.get('one')).toBe(1);
		expect(hashTable.get('two')).toBe(2);
		expect(hashTable.get('three')).toBe(3);
		expect(hashTable.get('four')).toBeUndefined();
	});

	test('remove', () => {
		hashTable.remove('two');

		expect(hashTable.get('one')).toBe(1);
		expect(hashTable.get('two')).toBeUndefined();
		expect(hashTable.get('three')).toBe(3);
	});

	test('keys', () => {
		const keys = hashTable.keys();
		expect(keys).toContain('one');
		expect(keys).toContain('two');
		expect(keys).toContain('three');
	});

	test('values', () => {
		const values = hashTable.values();
		expect(values).toContain(1);
		expect(values).toContain(2);
		expect(values).toContain(3);
	});
});
