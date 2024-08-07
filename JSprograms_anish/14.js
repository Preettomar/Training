const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
      console.log(array2D[i][j]);
    }
  }
////////////////////////////////////////////power of a number
  function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  
  // Example usage:
  const base = 2;
  const exponent = 3;
  console.log(`${base}^${exponent} = ${power(base, exponent)}`);


  