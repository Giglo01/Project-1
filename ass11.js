// program to find the maximum number in an array.

function findMaxNum(arr){
    if(arr.length === 0){
        return "Array is empty";
    }
    return Math.max(...arr);
}
let Number = [45,49,85,120,36,201,66,37];
let maxNumber = findMaxNum(Number)
console.log("Maximum Number:", maxNumber);