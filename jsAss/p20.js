//31.Write a function to find Factorial of a number
function factorial(x)
{
     let fact=1;
    for(let i=2;i<=x;i++)
    {
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(5));
