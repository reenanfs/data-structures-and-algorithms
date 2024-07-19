def get_digit_at_index(number: int, index: int) -> int:
    str_number = str(number)

    if index < 0 or index >= len(str_number):
        return 0

    return int(str_number[len(str_number) - 1 - index])


def get_number_len(number: int) -> int:
    return len(str(number))


def get_max_digit(arr: list) -> int:
    if not arr:
        raise ValueError("Array must not be empty")

    max_len = get_number_len(arr[0])
    for number in arr:
        number_len = get_number_len(number)
        if number_len > max_len:
            max_len = number_len

    return max_len


def radix_sort(arr: list) -> list:
    max_digits = get_max_digit(arr)

    for i in range(max_digits):

        digit_buckets = [[] for _ in range(10)]
        for number in arr:
            digit = get_digit_at_index(number, i)
            digit_buckets[digit].append(number)

        flattened_arr = []
        for bucket in digit_buckets:
            flattened_arr.extend(bucket)

        arr = flattened_arr

    return arr


arr = [20, 9, 1, 7, 3, 2, 4, 6, 80, 5, 1, 8]

print(radix_sort(arr))
