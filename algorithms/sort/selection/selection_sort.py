def selection_sort(arr: list[int]) -> list[int]:
    n = len(arr)

    for i in range(n):
        min_idx = i
        for j in range(i, n):
            if arr[j] < arr[min_idx]:
                min_idx = j

        arr[i], arr[min_idx] = arr[min_idx], arr[i]

    return arr


arr = [20, 9, 1, 7, 3, 2, 4, 6, 80, 5, 1, 8]

print(selection_sort(arr))
