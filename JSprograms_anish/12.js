//using hashmap

function removeDuplicates(arr) {
    const uniqueChars = {};
    const uniqueArray = [];

    for (let char of arr) {
        if (!uniqueChars[char]) {
            uniqueChars[char] = true;
            uniqueArray.push(char);
        }
    }

    return uniqueArray;
}


const arrayWithDuplicates = ['a', 'b', 'a', 'c', 'b', 'd', 'e', 'd'];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); 