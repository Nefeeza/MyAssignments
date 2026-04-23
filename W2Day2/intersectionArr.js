//  The intersection of two arrays - edge cases

let result = [];

function intersection(arr1, arr2){
    
    // If both arrays are empty
    if (arr1.length === 0 && arr2.length === 0){
        console.log(`Both arrays are empty`);
    } 

    // Any one array empty
    else if (arr1.length === 0 || arr2.length === 0){
        console.log(`One of the array is empty`);
    } 

    // Intersection
    else {
        for (let i = 0; i < arr1.length; i++){
            if (arr2.includes(arr1[i])){
                result.push(arr1[i]);
            }
        }
    }

    // Checking if result array has any values
    if (result.length === 0){
        console.log("No intersection of Element");
    } else {
        console.log("Elements are:", result);
    }
}

let array1 = [];
let array2 = [];

intersection(array1, array2);
