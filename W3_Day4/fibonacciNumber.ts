
let n;
let result: number = 0;

function fibonacci(n: number) {
    let a: number = 0;
    let b: number = 1;
    console.log(a);
    console.log(b);
    if (n > 0) {
        for (let i = 2; i < n; i++){
            result = a + b;
            console.log(result);
            a = b;
            b = result;
        }
    }else {
        console.log("Enter valid number");
    }
}

fibonacci(5);
fibonacci(-1);