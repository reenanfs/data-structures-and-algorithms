# HashTable

A HashTable is a data structure that implements an associative array, mapping keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

## Structure

A HashTable typically consists of the following components:

- **Array (or Buckets)**: An array where each element is a bucket that may hold multiple key-value pairs.
- **Hash Function**: A function that converts keys into array indices. It ensures efficient storage and retrieval by distributing items evenly across the array.

Here's a conceptual view of a HashTable:

Bucket 0 -> [ [key1, value1], [key2, value2], ... ]
Bucket 1 -> [ [key3, value3] ]
Bucket 2 -> [ ]
Bucket 3 -> [ [key4, value4], [key5, value5], ... ]
...

In this example:

- The HashTable has multiple buckets (arrays), each potentially containing key-value pairs.
- The Hash Function determines which bucket a key-value pair belongs to based on the hashed key.

## Operations

HashTables support efficient insertion, deletion, and access operations:

### Insertion

Inserting a key-value pair involves:

1. **Hashing**: Computing the hash code of the key.
2. **Indexing**: Using the hash code to determine the index in the array.
3. **Collision Handling**: If multiple keys hash to the same index (collision), handling strategies like chaining (using linked lists or arrays) or open addressing (probing nearby slots) are used.

### Retrieval (Get)

Retrieving a value for a given key involves:

1. **Hashing**: Computing the hash code of the key.
2. **Indexing**: Using the hash code to find the index in the array.
3. **Finding the Value**: Accessing the bucket at the computed index and finding the value associated with the key.

### Deletion

Deleting a key-value pair involves:

1. **Hashing**: Computing the hash code of the key.
2. **Indexing**: Using the hash code to find the index in the array.
3. **Removing the Entry**: Removing the key-value pair from the bucket at the computed index.

## Use Cases

HashTables are used in various scenarios where efficient lookup, insertion, and deletion of key-value pairs are required:

- **Databases**: HashTables are used in database indexing for fast retrieval of records based on keys.
- **Caches**: HashTables are used in caching systems to store recently accessed data for fast retrieval.
- **Symbol Tables**: HashTables are used in compilers and interpreters to store variables and their values efficiently.

## Real Examples of Use

- **Python's Dictionary**: Python's dictionary type (`dict`) is implemented using a HashTable for efficient key-value pair operations.
- **Node.js's Map**: Node.js provides a `Map` class that uses HashTable principles for efficient key-value storage and retrieval.

## Time Complexity

- **Average Case**:
  - **Insertion**: O(1)
  - **Deletion**: O(1)
  - **Get (Access)**: O(1)
- **Worst Case** (with collisions):
  - **Insertion**: O(n)
  - **Deletion**: O(n)
  - **Get (Access)**: O(n)

## Space Complexity

- **Space Complexity**: O(n)

The space complexity of a HashTable depends on the number of elements stored in the table.

**Note**: This README provides a basic overview of HashTables. Depending on the implementation details and collision resolution strategies, actual performance may vary.
