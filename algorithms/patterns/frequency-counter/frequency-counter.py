def is_valid_anagram(str1: str, str2: str) -> bool:
    if len(str1) != len(str2):
        return False

    frequency_counter = {}
    frequency_counter2 = {}

    for letter in str1:
        if not frequency_counter.get(letter):
            frequency_counter[letter] = 0
        frequency_counter[letter] += 1

    for letter in str2:
        if not frequency_counter2.get(letter):
            frequency_counter2[letter] = 0
        frequency_counter2[letter] += 1

    return frequency_counter == frequency_counter2


print(is_valid_anagram('aaz', 'zza'))
