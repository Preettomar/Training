//7. JavaScript Program to Check Leap Year

function year(year) {
    if (year % 4 === 0 ) {
        return "Leap Year";
    } else {
        return "Not Leap";
    }
}
console.log(year(2020)); 
