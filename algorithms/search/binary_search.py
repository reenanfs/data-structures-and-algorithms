def binary_search(arr: list[str], search_param: str) -> int:
    left_i = 0
    right_i = len(arr) - 1

    while (left_i <= right_i):
        middle_i = (left_i + right_i) // 2

        if arr[middle_i] == search_param:
            return middle_i
        elif arr[middle_i] > search_param:
            right_i = middle_i - 1
        else:
            left_i = middle_i + 1

    raise ValueError(f'{search_param} is not in the list')


arr = ['a', 'b', 'c', 'd']
search_param = 'd'

print(binary_search(arr, search_param))
