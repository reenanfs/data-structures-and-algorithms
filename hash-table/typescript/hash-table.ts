export class HashTable<T> {
	private _keyMap: Array<[string, T][]>;

	constructor(size: number) {
		this._keyMap = new Array(size);
	}

	set(key: string, value: T): void {
		const index = this._hash(key);

		if (!this._keyMap[index]) {
			this._keyMap[index] = [];
		}

		this._keyMap[index].push([key, value]);
	}

	get(key: string): T | undefined {
		const index = this._hash(key);

		const bucket = this._keyMap[index];

		if (bucket) {
			for (let pair of bucket) {
				if (pair[0] === key) {
					return pair[1];
				}
			}
		}

		return undefined;
	}

	remove(key: string): void {
		const index = this._hash(key);
		if (this._keyMap[index]) {
			this._keyMap[index] = this._keyMap[index].filter(pair => {
				pair[0] === key;
			});
		}
	}

	keys(): string[] {
		const keys: string[] = [];
		for (let bucket of this._keyMap) {
			if (bucket) {
				bucket.forEach(pair => {
					keys.push(pair[0]);
				});
			}
		}

		return keys;
	}

	values(): T[] {
		const values: T[] = [];
		for (let bucket of this._keyMap) {
			if (bucket) {
				bucket.forEach(pair => {
					values.push(pair[1]);
				});
			}
		}

		return values;
	}

	private _hash(key: string) {
		let total = 0;
		let PRIME = 31; // A prime number to help with distribution
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * PRIME + value) % this._keyMap.length;
		}
		return total;
	}
}
