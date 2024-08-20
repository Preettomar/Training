/*33.Write a self invoked with a object as an argument with the details of 10 people, if
the age is more than 18 he should be allowed to open a bank account if greater
than 60 they should be given priority in the queue and if greater than 80 they can
avail home banking.*/

(function (people) {
    people.forEach(person => {
        if (person.age > 80) {
            console.log(`${person.name} can avail home banking.`);
        } else if (person.age > 60) {
            console.log(`${person.name} should be given priority in the queue.`);
        } else if (person.age > 18) {
            console.log(`${person.name} should be allowed to open a bank account.`);
        } else {
            console.log(`${person.name} is not eligible to open a bank account.`);
        }
    });
})([
    { name: "John", age: 25 },
    { name: "Jane", age: 65 },
    { name: "Paul", age: 85 },
    { name: "Mark", age: 17 }
]);
