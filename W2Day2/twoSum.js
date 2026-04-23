//  return pairs of indices whose elements sum up to a specific target using nested loops in JavaScript.



function addIndices(arr, t){

    let result = [];

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            let sum = arr[i] + arr[j];

            if (sum === t) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    if (result.length === 0){
        console.log("No target found");
    }
    return result;
}

let myArray = [2, 5, 4, 3, 6, 1];
let target = 15;
console.log(addIndices(myArray, target));