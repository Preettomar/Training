const library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
}];

(function(people) {
    people.forEach(person => {
        console.log(person.title);
        console.log(person.author);
        console.log(person.readingStatus);
        console.log("+++++++++++++++++++");
        
        
        
    });

    // Display the results
    
})(library);
   