// sum of numbers from 1 to a given `n`. 

let sum = 0;

 function sumOfNumber(n){
    if (n > 0){
        for (let i = 1; i <= n; i++){
            sum += i;
            console.log(`Now the value of i and sum are ${i} and ${sum}`);
        }
    return `Sum of N numbers is ${sum}`;
    }else {
        return `Please input valid number to calculate sum`;
    }
    
 }

 console.log(sumOfNumber(5)); // 15

 console.log(sumOfNumber(0)); // Error Message