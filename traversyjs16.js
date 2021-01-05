//function takes values from call
function addNums(num1, num2) {
    console.log(num1 + num2)
}

addNums(4, 5)

//function has numbers assigned in argument
function addOthers(numOne = 1, numTwo = 3) {
    console.log(numOne + numTwo)
}

addOthers()

//function has return statement
function addAgain(numa1, numa2) {
    return numa1 + numa2
}

console.log(addAgain(7, 10))

//arrow function
const addStuff = numy1 => numy1 + 5

console.log(addStuff(20))
