// Count the occurrences of a specific element in an array using JavaScript. 

const nums = [2,4,5,2,1,2];
let count = 0;
let count1 = 0;

function countNumber(x){
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === x){
            count++;
        }else {
            continue;
        }
    }
    return count;
}

console.log(countNumber(2));


// Using Arguments

function countNumberArr(arr, x){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === x){
            count1++;
        }else {
            continue;
        }
    }
    return count1;
}

console.log(countNumberArr([2,4,5,2,1,2,1,1,1,5,1], 1));