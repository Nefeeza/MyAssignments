"use strict";
let n;
let result = 0;
function fibonacci(n) {
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    if (n > 0) {
        for (let i = 2; i < n; i++) {
            result = a + b;
            console.log(result);
            a = b;
            b = result;
        }
    }
    else {
        console.log("Enter valid number");
    }
}
fibonacci(5);
fibonacci(-1);
