function dateDifference(date1, date2) {
    let timeDiff = Math.abs(date2 - date1);
    let diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return diffDays;
}
let d1 = new Date("2023-08-01");
let d2 = new Date("2023-08-03");
console.log(dateDifference(d1, d2)); 
