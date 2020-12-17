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
    # global password
 
    # print(lines)

    ValidPassCounter = 0

    # split linjerne i deres bestanddele
    for line in lines:
        parts = line.split(": ")
        
        password = parts[1]

        rules = parts[0] 
        ruleparts = rules.split(" ")
  
        letter = ruleparts[1]
        low = int(ruleparts[0].split("-")[0])
        heigh = int(ruleparts[0].split("-")[1])
 
        # if is_valid(password, low, heigh, letter):
        #      ValidPassCounter += 1
             
        # problem 2 __________________________________________________________________________
        
        if is_valid(password, low, heigh, letter):
             ValidPassCounter += 1
      
    print(ValidPassCounter)
    return ValidPassCounter
    
def is_valid(p, min, max, l):
    # count = 0
    # for letter in p:
    #     if l == letter:
    #         count += 1
    # return min <= count and count <= max 

    # problem 2_________________________________
    count = 0
    if l == p[min-1] or l == p[max-1]:
        count = 1
    if l == p[min-1] and l == p[max-1]:
        count = 0
    return count == 1

load_data("day2-input.txt")
problemOne()