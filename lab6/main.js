// ex 1
function printMessage(){
    console.log("Hello, World!")
    console.log("Hello, World!")
    console.log("Hello, World!")
}

printMessage()

// ex 10
function checkEqual(number1, number2){
    if (number1 == number2){
        return true
    }
    else {
        return false
    }
}

let isEqual = checkEqual(3, 5)
console.log("Are 3 and 5 equal? " + isEqual)


// ex 13

function greatestOfTwo(number1, number2){
    if (number1 == number2){
        return "Numbers are equal"
    }
    if (number1 > number2){
        return number1
    }
    else {
        return number2
    }
}

let largest = greatestOfTwo(4, 8)

console.log("Between 4 and 8, " + largest + " is largest")
