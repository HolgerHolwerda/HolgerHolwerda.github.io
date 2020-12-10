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
    # print(lines)

    ValidPassCounter = 0

    # split linjerne i deres bestanddele
    for line in lines:
        parts1 = line.split(": ")
        
        password = parts1[1]

        rules = parts1[0] 
        parts2 = rules.split(" ")
  
        letter = parts2[1]
        low = int(parts2[0].split("-")[0])
        heigh = int(parts2[0].split("-")[1])

        print(low, heigh, letter, password) #debug
      


        # if Is_Valid = true:
        #     ValidPassCounter += 1

def Is_Valid(p, min, max, l):
    return true
        

# load_data("day2-input.txt")
problemOne()