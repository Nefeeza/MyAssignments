// Manipulate strings and use looping statements

// Given a string s consisting of words and spaces, return the length of the last word in the string. 

// Example:1 & 2

function stringLength(str){
    let str1 = str.trim();
    let strArray = str1.split(" ");
    let len = strArray[strArray.length - 1].length;
    console.log(`Length of the last word is ${len}`);
}

stringLength( "Hello World" );
stringLength( "   fly me   to   the moon  " );

// Example:3 An anagram is when you mix up the letters of a word to make a new one, using all the letters.

function isAnagram(str1,str2){

    // String --> Remove Space --> convert to lower case --> split into array --> sort the array --> again join the letters

    let sortStr1 = str1.trim().toLowerCase().split('').sort().join('');
    let sortStr2 = str2.trim().toLowerCase().split('').sort().join('');

    // Comparing both strings
    
    if (sortStr1 === sortStr2){
        return "True";
    }else {
        return "False";
    }
        
    
}

console.log(isAnagram("listen","silent"));

console.log(isAnagram("Hello","World"));