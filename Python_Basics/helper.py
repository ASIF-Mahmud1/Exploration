
def calculateExpense(listOfItems):
    print("Expense")
    total=0  
    for i in listOfItems:
        total=total+i
    
    return total


def calculateIncome(listOfItems):
    print("Income")
    total=0  
    for i in listOfItems:
        total=total+i

    return total

def hello():
  name = str(input("Enter your name: "))
  if name:
    print ("Hello " + str(name))
  else:
    print("Hello World") 
  return 
