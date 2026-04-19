// Learn to implement a JavaScript function determining whether a given number is odd or even.  

let x; // Declaring the variable

// Create a function named `isOddOrEven` that takes a number as a parameter 
function isOddOrEven(x){

    // Conditional statement to check if the number is divisible by 2    
    if((x%2)===0){
        return x+ " is Even Number";
    }
    else{
        return x+ " is Odd Number";
    }
}

console.log(isOddOrEven(15));