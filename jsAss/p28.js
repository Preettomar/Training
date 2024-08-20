function subsetString(str) {
    let subsets = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        subsets.push(str.slice(i, j));
      }
    }
    return subsets;
  }
  
  console.log(subsetString("abc")); // Output: ["a", "ab", "abc", "b", "bc", "c"]
  