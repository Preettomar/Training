let x = 5;
let y = 3;

console.log(x + y);  // Addition
console.log(x - y);  // Subtraction
console.log(x * y);  // Multiplication
console.log(x / y);  // Division
console.log(x % y);  // Modulus
console.log(x ** y); // Exponentiation

x += y;  // x = x + y
console.log(x);

x -= y;  // x = x - y
console.log(x);

x *= y;  // x = x * y
console.log(x);

x /= y;  // x = x / y
console.log(x);

x %= y;  // x = x % y
console.log(x);

x **= y; // x = x ** y
console.log(x);

console.log(x == y);  // Equal to
console.log(x != y);  // Not equal to
console.log(x === y); // Strict equal to
console.log(x !== y); // Strict not equal to
console.log(x > y);   // Greater than
console.log(x < y);   // Less than
console.log(x >= y);  // Greater than or equal to
console.log(x <= y);  // Less than or equal to

x &= y;  // Bitwise AND
console.log(x);

x |= y;  // Bitwise OR
console.log(x);

x ^= y;  // Bitwise XOR
console.log(x);

x <<= y; // Left shift
console.log(x);

x >>= y; // Right shift
console.log(x);

x >>>= y; // Unsigned right shift
console.log(x);
