# A pangram is a string that contains every letter of the alphabet. Return whether a string is a pangram or not.
import string 
#Return: 'pangram' or 'not pangram'

def pangram(s):
    s = sorted(set(s.replace(" ", "").lower()))
    target = list(string.ascii_lowercase)
    return('Not Pangram', 'Pangram')[s == target]
    



#Testing 
print(pangram('We promptly judged antique ivory buckles for the next prize')) #true
print(pangram('We promptly judged antique ivory buckles for the prize')) #false