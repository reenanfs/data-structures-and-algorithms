def bubble_sort(arr: list[int]) -> list[int]:
    n = len(arr)

    for i in range(n):

        swaped = False
        for j in range(n-i-1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j+1] = arr[j + 1], arr[j]
                swaped = True

        if not swaped:
            break

    return arr


arr = [20, 9, 1, 7, 3, 2, 4, 6, 80, 5, 1, 8]

print(bubble_sort(arr))
