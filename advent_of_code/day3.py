# https://adventofcode.com/2020/day/1/

lines = [
'1-3 a: abcde',
'1-3 b: cdefg',
'2-9 c: ccccccccc',
'1-4 d: deefhg',
'5-7 h: rrrrhrhr',
]

def load_data(fileName):
    global lines
    with open(fileName, "r") as input_data:
        lines = input_data.readlines()
    for i in range(len(lines)):
        lines[i] = lines[i].strip()

def problemOne():
    global lines
   

# load_data("day3-input.txt")
problemOne()

