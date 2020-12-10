# https://adventofcode.com/2020/day/1/

lines = [
'1-3 a: abcde',
'1-3 b: cdefg',
'2-9 c: ccccccccc',
]

def load_data(fileName):
    global lines
    with open(fileName, "r") as input_data:
        lines = input_data.readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].strip()

def problemOne():
    global lines
    print(lines)

    ValidPassCounter = 0

    for line in lines:
        parts = line.split(": ")
        p = parts[1]

        rules = parts[0]
        l = rules.split("  ")
        low = int(rules.split("-")[0])

        if Is_Valid = true:
            ValidPassCounter += 1

def Is_Valid(p, min, max, l):
    return true
        

# load_data("day2-input.txt")
problemOne()