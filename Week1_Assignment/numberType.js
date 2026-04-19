// Create a JavaScript function that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type. 

let x;

function numberType(x){
    if(x > 0){
        return x+ " is a Positive Number";
    }else if(x < 0){
        return x+ " is a Negative Number";
    }else {
        return "Given Number is Zero";
    }
}

console.log(numberType(0));