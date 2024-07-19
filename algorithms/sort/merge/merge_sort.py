def merge(left_arr: list[int], right_arr: list[int]) -> list[int]:
    arr = []
    left_len = len(left_arr)
    right_len = len(right_arr)
    i = 0
    j = 0

    while i < left_len and j < right_len:
        if left_arr[i] < right_arr[j]:
            arr.append(left_arr[i])
            i += 1
        else:
            arr.append(right_arr[j])
            j += 1

    while i < left_len:
        arr.append(left_arr[i])
        i += 1

    while j < right_len:
        arr.append(right_arr[j])
        j += 1

    return arr


def merge_sort(arr: list[int]) -> list[int]:
    if len(arr) <= 1:
        return arr

    middle_idx = len(arr) // 2

    left_arr = merge_sort(arr[:middle_idx])
    right_arr = merge_sort(arr[middle_idx:])

    return merge(left_arr, right_arr)


arr = [20, 9, 1, 7, 3, 2, 4, 6, 80, 5, 1, 8]

print(merge_sort(arr))
