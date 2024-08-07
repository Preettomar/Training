const prompt = require('prompt-sync')();

//bubble sort
function bubbleSort(arr){
    const n = arr.length;
    for(let i = 0;i < n - 1;i++){
        for(let j = 0 ; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }

        }
    }
    return arr;
}


const inputArray = prompt("enter the array numbers");
const arr = inputArray.split(",").map(Number);
const sortedArray = bubbleSort(arr);
console.log(sortedArray);
