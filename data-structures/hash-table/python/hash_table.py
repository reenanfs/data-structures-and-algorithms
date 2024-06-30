class HashTable:
    def __init__(self, size):
        self._key_map = [None] * size

    def set(self, key, value):
        index = self._hash(key)
        if not self._key_map[index]:
            self._key_map[index] = []
        self._key_map[index].append((key, value))

    def get(self, key):
        index = self._hash(key)
        bucket = self._key_map[index]
        if bucket:
            for pair in bucket:
                if pair[0] == key:
                    return pair[1]
        return None

    def remove(self, key):
        index = self._hash(key)
        if self._key_map[index]:
            self._key_map[index] = [pair for pair in self._key_map[index] if pair[0] != key]

    def keys(self):
        keys = []
        for bucket in self._key_map:
            if bucket:
                for pair in bucket:
                    keys.append(pair[0])
        return keys

    def values(self):
        values = []
        for bucket in self._key_map:
            if bucket:
                for pair in bucket:
                    values.append(pair[1])
        return values

    def _hash(self, key):
        total = 0
        prime = 31
        for i in range(min(len(key), 100)):
            char = key[i]
            value = ord(char) - 96
            total = (total * prime + value) % len(self._key_map)
        return total
