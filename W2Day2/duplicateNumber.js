// Print duplicate elements from an array


let dupArr = [];

function duplicateArray(arr){
    for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
          if(arr[i] === arr[j]){
            if(!dupArr.includes(arr[i])){
               dupArr.push(arr[i]);
            }
          }
        }
    }
    return dupArr;
}

let myArr = [1,2,3,2,4,5,1,4,9,7,9,3,2,2,4];
console.log(duplicateArray(myArr));


