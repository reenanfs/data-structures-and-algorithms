def count_unique_values(arr):
    if not arr:
        return 0

    arr.sort()

    count = 1

    for i in range(1, len(arr)):
        if arr[i] != arr[i - 1]:
            count += 1

    return count


print('result: ', count_unique_values([1, 2, 3]))
