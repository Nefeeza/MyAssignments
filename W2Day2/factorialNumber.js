//  Factorial of a given non negative integer 

let result = 1;
function factorial(n){
    if (n > 0){
        for (let i = 1; i <= n; i++){
            result = result * i;
        }
        return result;
    } else {
        return "Please enter valid/Positive number";
    }    
}

console.log(factorial(5));

console.log(factorial(-2));