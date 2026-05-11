

let result: number = 1;

function factorial(n: number){
    if (n > 0){
        for (let i = 1; i <= n; i++) {
            result = result * i;
            console.log(result);
        }
    }else {
        console.log("Enter valid number");
    }
}

factorial(5);
factorial(-3);