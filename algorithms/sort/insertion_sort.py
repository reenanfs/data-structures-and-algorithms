def insertion_sort(arr: list[int]) -> list[int]:
    n = len(arr)

    for i in range(1, n):
        current_val = arr[i]

        j = i - 1

        while j >= 0 and current_val < arr[j]:
            arr[j+1] = arr[j]
            j -= 1

        arr[j + 1] = current_val

    return arr


arr = [20, 9, 1, 7, 3, 2, 4, 6, 80, 5, 1, 8]

print(insertion_sort(arr))
