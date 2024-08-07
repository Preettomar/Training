(function(people) {
    people.forEach(person => {
        if (person.age > 80) {
            person.bankStatus = "Can avail home banking";
        } else if (person.age > 60) {
            person.bankStatus = "Given priority in the queue";
        } else if (person.age > 18) {
            person.bankStatus = "Allowed to open a bank account";
        } else {
            person.bankStatus = "Not eligible to open a bank account";
        }
    });

    // Display the results
    console.log(people);
})([
    { name: "John Doe", age: 25 },
    { name: "Jane Smith", age: 17 },
    { name: "Michael Johnson", age: 61 },
    { name: "Emily Davis", age: 45 },
    { name: "William Brown", age: 80 },
    { name: "Jessica Wilson", age: 19 },
    { name: "David Jones", age: 84 },
    { name: "Sarah Garcia", age: 73 },
    { name: "James Martinez", age: 52 },
    { name: "Mary Rodriguez", age: 90 }
]);
