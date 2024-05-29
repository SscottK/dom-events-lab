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
//used to update the content to display
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
//used to update what the calculater shows
const render = () => {
    displayEl.textContent = results
}

const updateOperator = (event) => {    
    operator = event.target.textContent
    
    
    
}

const UpdateNumbers = (event) => {
    
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


//creating simple helper functions to use anywhere
const add = (num1, num2) => {
    total = Number(num1) + Number(num2) 
    
}

const subtract = (num1, num2) => {
    total = Number(num1) - Number(num2)
    
}

const multiply = (num1, num2) => {
    total = Number(num1) * Number(num2)
    
}

const divide = (num1, num2) => {
    total = Number(num1) / Number(num2)
    
}
//main calculation function used to find the operator and then run the corresponding helper function 
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

//this was the only way I could figure out how to get everything to clear and reset

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
//using forEach to accees each elelment with the right class to avoid repeating code
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
