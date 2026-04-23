// compute the nth Fibonacci number using a loop (iterative approach).



function fibonacci(n) {
    if (n < 0) {
        return "Please enter a non-negative number";
    }

    let a = 0, b = 1;
    if (n === 0) return a;
    if (n === 1) return b;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(3)); 
console.log(fibonacci(5)); 