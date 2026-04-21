// Prints odd numbers between 1 and 25.

function printOddNumbers(){
    for(let i=1; i<=25; i++){
       if(i%2===1){
          console.log(`${i}`);
       }
    }
}

printOddNumbers();