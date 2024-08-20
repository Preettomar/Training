let library = [
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
    }
  ];
  
  library.forEach(book => {
    console.log(`Book: ${book.title}, Author: ${book.author}, Reading Status: ${book.readingStatus}`);
  });
  