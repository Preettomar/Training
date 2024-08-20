function objectToList(obj) {
    return Object.entries(obj);
  }
  
  let obj = {a: 1, b: 2, c: 3};
  console.log(objectToList(obj)); 
  