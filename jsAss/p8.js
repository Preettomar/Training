//13.JavaScript Program to Compare Elements of Two Arrays

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.log(compareArrays([1, 2, 3], [1, 2, 3])); 
