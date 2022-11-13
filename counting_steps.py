def countingValleys(steps, path):
    current_level = 0
    valley_count = 0
    new_valley = True

    for p in path:
        print(new_valley)
        if p == 'D':
            current_level -= 1
            if (current_level < 0) and (new_valley == True):
                valley_count += 1
                new_valley = False
          

        elif p == 'U':
            current_level += 1
            if current_level >= 0:
                new_valley = True
    
    return valley_count

print(countingValleys(8, 'UDDDUDUU'))