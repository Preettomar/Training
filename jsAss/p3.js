//4. JavaScript Program to Check Prime Number

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return "notprime";
    }
    return "prime";
}
console.log(isPrime(5));  
