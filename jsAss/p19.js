//29.Write a function to check if an input string is a palindrome
function isPalindrome(str)
 {
    let  reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
    if(str ===reversedStr)
    {
        return 'ispalindrom';
    }
    else
    {
        return 'Not palindrome';
    }
}


console.log(isPalindrome("nitin"));
