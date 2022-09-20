function descendingOrder(n){
    //...
    
    const nums = n.toString();
    const newNum = nums.split("");
    const sorted = newNum.sort((a, b)=> b - a);

    const result = sorted.join("");

    return result;
  
    

  }

 console.log(descendingOrder(456326)) 