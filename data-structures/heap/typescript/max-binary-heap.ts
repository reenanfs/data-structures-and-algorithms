export class MaxBinaryHeap {
	values: number[];

	constructor() {
		this.values = [];
	}

	insert(value: number): void {
		this.values.push(value);
		this.bubbleUp(value);
	}

	private bubbleUp(value: number) {
		let index = this.values.length - 1;
		let parentIndex;

		while (index > 0) {
			parentIndex = Math.floor((index - 1) / 2);
			let parentValue = this.values[parentIndex];

			if (parentValue >= value) {
				break;
			}
			this.values[index] = parentValue;
			this.values[parentIndex] = value;

			index = parentIndex;
		}
	}

	remove(): number | undefined {
		if (this.values.length === 0) {
			return undefined;
		}

		const removed = this.values[0];
		const lastValue = this.values.pop();

		if (!lastValue) {
			return undefined;
		}

		if (this.values.length > 0) {
			this.values[0] = lastValue;
			this.sinkDown(0);
		}

		return removed;
	}

	private sinkDown(index: number): void {
		let swapIndex = index;

		let leftIndex;
		let rightIndex;

		while (true) {
			leftIndex = index * 2 + 1;
			rightIndex = index * 2 + 2;

			if (
				leftIndex < this.values.length &&
				this.values[swapIndex] < this.values[leftIndex]
			) {
				swapIndex = leftIndex;
			}

			if (
				rightIndex < this.values.length &&
				this.values[swapIndex] < this.values[rightIndex]
			) {
				swapIndex = rightIndex;
			}

			if (swapIndex !== index) {
				let swapValue = this.values[swapIndex];
				this.values[swapIndex] = this.values[index];
				this.values[index] = swapValue;

				index = swapIndex;
			} else {
				break;
			}
		}
	}

	peek(): number | undefined {
		return this.values.length > 0 ? this.values[0] : undefined;
	}
}
