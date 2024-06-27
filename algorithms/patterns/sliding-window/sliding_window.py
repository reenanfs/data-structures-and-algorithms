def max_sub_array_sum(arr: list[int], n: int) -> int:
    if not arr or n <= 0:
        return 0

    if len(arr) < n:
        raise Exception('Array length is smaller than n')

    max_sum = sum(arr[:n])
    temp_sum = max_sum

    for i in range(n, len(arr)):
        temp_sum = temp_sum + arr[i] - arr[i - n]
        if temp_sum > max_sum:
            max_sum = temp_sum

    return max_sum


print(max_sub_array_sum([-2, -3, 4, -1, -2, 1, 5, -3], 3))
