//5. JavaScript Program to Find LCM
function abc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / abc(a, b);
}

console.log(lcm(12, 15)); 