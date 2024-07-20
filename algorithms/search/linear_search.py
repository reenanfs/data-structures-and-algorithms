def linear_search(arr: list[str], search_param: str) -> int:
    for i, item in enumerate(arr):
        if item == search_param:
            return i

    raise ValueError(f'{search_param} is not in the list')


arr = ['a', 'b', 'c', 'd']
search_param = 'd'

print(linear_search(arr, search_param))
