/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let num1
let num2
let operator
let results
let total
let equals
let clear





/*------------------------ Cached Element References ------------------------*/
const numberBtnEls = document.querySelectorAll('.number')
const operatorBtnEls = document.querySelectorAll('.operator')
const equalBtnEls = document.querySelector('.equals')
const displayEl =  document.querySelector('.display')



/*-------------------------------- Functions --------------------------------*/
const updateResult = () => {    
    if (operator === undefined) {
        results = num1
    } else if (operator !== undefined) {
        results = num2
    }
    if (num1 && operator && num2 && equals) {              
       results = total
    }
    render()   
}

const updateEquals = (event) => {
    equals = event.target.textContent
    calculate(num1, num2, operator)
    updateResult()
}
const render = () => {
    displayEl.textContent = results
}

const updateOperator = (event) => {    
    operator = event.target.textContent
    console.log(operator)
    
    
}

const UpdateNumbers = (event) => {
    console.log(event.target.textContent)
    if (!num1 && operator === undefined) {
        num1 = event.target.textContent
    } else if (operator === undefined) {
        num1 += event.target.textContent
    }
    if (!num2 && operator !== undefined) {
        num2 = event.target.textContent
    } else if ( operator !== undefined) {
        num2 += event.target.textContent
    }
    updateResult()
}



const add = (num1, num2) => {
    total = Number(num1) + Number(num2) 
    
}

const subtract = (num1, num2) => {
    total = Number(num1) - Number(num2)
    console.log(total)
}

const multiply = (num1, num2) => {
    total = Number(num1) * Number(num2)
    console.log(total)
}

const divide = (num1, num2) => {
    total = Number(num1) / Number(num2)
    console.log(total)
}

const calculate = (num1, num2, operator) => {
    if (operator === '+') {       
        add(num1, num2)
    } else if ( operator === '-') {
        subtract(num1, num2)
    } else if ( operator === '*') {
        multiply(num1, num2)
    } else if ( operator === '/') {
        divide(num1, num2)
    } 
}
const updateClear = (event) => {
   clear = event.target.textContent 
   reset()
}

const reset = () => {       
    num1 = undefined
    num2 = undefined
    equals = undefined
    total = undefined
    results = undefined
    operator = undefined
    clear = undefined
    updateResult()   
 
}

/*----------------------------- Event Listeners -----------------------------*/

numberBtnEls.forEach((numberBtnEl) => {
    numberBtnEl.addEventListener('click', UpdateNumbers)
})

operatorBtnEls.forEach((operatorBtnEl) => {    
    operatorBtnEl.addEventListener('click', updateOperator)
    if (operatorBtnEl.textContent === 'C') {
        operatorBtnEl.addEventListener('click', updateClear)
    }
})

equalBtnEls.addEventListener('click', updateEquals)
/*handler function used to set left side operator and right side of arguments

when numbers start getting clicked:
    capture & display input for first number using variable (firstNumber)

when operator is clicked:
    capture operator in variable (operator)  
    remove listener for number 1 and turn on number 2
    try and turn off for oporators other than c or =
when second numbers are being clicked:

    capture & display number 2 using variable (secondNumber) diff then first number 

use if else with switch case to get the correct maths function

show total when = is clicked
*/