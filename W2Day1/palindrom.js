// Reverse a string and check for palindrome

function isPalindrome(str){
    let reverse = "";
    
    // Reverse string using CharAt()
    for(let i = str.length - 1; i >= 0; i--){
        reverse += str.charAt(i);
    }

    //Print both strings
    console.log(str + " == " + reverse);

    // Now checking for palindrom
    if(str === reverse){
        console.log(`The string \"${str}\" is Palindrome`);
    }else{
        console.log(`The string  \"${str}\" is not Palindrome`);
    }

}

isPalindrome("world");
isPalindrome("madam");