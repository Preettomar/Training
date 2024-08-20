//bubble sort
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
        }
      }
    }
    return arr;
  }
  
  let data = [6, 4, 0, 3, -2, 1];
  console.log(bubbleSort(data)); 
  