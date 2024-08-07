function calculator() {
    var ans = 0
    function add(val) {
      ans +=val;
      return ans
    }
  
    function sub(val) {
      ans-=val;
      return ans;
    }
  
    function mul(val) {
      ans*=val;
      return ans;
    }
  
    function div(val) {
      if (val === 0) {
        return "can't be divided";
      } else {
        ans /=val;
        return ans;
      }
    }
    function clear() {
        ans = 0;
        return ans;
    }
  
 
    return {
      add,
      sub,
      mul,
      div,
      clear
    };
  }
  
 
  const calc = calculator();
  

  console.log(calc.add(4));
  console.log(calc.sub(3));
  console.log(calc);

