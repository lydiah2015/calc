//function for add 
function add(a,b){
     return a+b
}    console.log(add(2,4))



//function for subtract
function subtract(a,b){
 return a-b
}
console.log(subtract(2,4))

//function for multiply
const multiply = function(a,b){
    return a*b
}
console.log(multiply(2,3))

//function for divide
let divide = (a,b)=>{
    return a/b
}
console.log(divide(1000,5))


//the operators

//  let addtion =  '+'
//  let subtraction =  '-'
//  let division = '/'
//  let multiplication ='*'

 let operator

 // first number
 let num1 
 //second number
 let num2

 //function operate
 function operate (number1,number2,operator){
   
    if (operator == '+'){
        return add(number1,number2) 
    }else if(operator == '-'){
        return subtract(number1,number2)
    }else if(operator == '*'){
        return multiply(number1,number2)
    }else if(operator == '/'){
        return divide(number1,number2)
    }
 }