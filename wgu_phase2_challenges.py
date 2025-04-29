# #Group by First Letter
# Write a function called group_by_first_letter() that:
# Accepts a list of words as input.
# Groups the words by their first letter (case-insensitive).
# Returns a dictionary where:
# Keys are lowercase letters
# Values are lists of words (original casing preserved) that start with that letter

# Example input:
# ["Cat", "car", "dog", "Desk", "dodge", "apple", "Ant"]
# Expected output:
# {
#   'c': ['Cat', 'car'],
#   'd': ['dog', 'Desk', 'dodge'],
#   'a': ['apple', 'Ant']
# }


def group_by_first_letter(words):
    grouped = {}

    for word in words:
        first_letter = word[0].lower()
        if first_letter not in grouped:
            grouped[first_letter] = [word] 
        else:
            grouped[first_letter].append(word)
    return grouped