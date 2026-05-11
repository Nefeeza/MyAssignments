// Create a function that accepts only specific payment methods.

// Create a type alias called PaymentMethod that allows only "UPI", "CreditCard", or "PayPal".
type PaymentMethod = "UPI" | "CreditCard" | "PayPal";

// Function makePayment
function makePayment(method: PaymentMethod): void {
    console.log(`Payment method selected: ${method}`);
}

// Call the function with "UPI" and "CreditCard"as arguments.
makePayment("UPI");
makePayment("CreditCard");