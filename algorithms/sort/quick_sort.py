def partition(arr: list, left: int, right: int):
    pivot = arr[left]
    swap_idx = left

    for i in range(left+1, right+1):
        if pivot >= arr[i]:
            swap_idx += 1
            arr[i], arr[swap_idx] = arr[swap_idx], arr[i]

    arr[left], arr[swap_idx] = arr[swap_idx], arr[left]
    return swap_idx


def quick_sort(arr, left: int | None = 0, right: int | None = None):
    if right is None:
        right = len(arr) - 1

    if left < right:
        partition_idx = partition(arr, left, right)
        quick_sort(arr, left, partition_idx-1)
        quick_sort(arr, partition_idx+1, right)
    return arr


arr = [20, 9, 1, 7, 3, 2, 4, 6, 80, 5, 1, 8]

print(quick_sort(arr))
