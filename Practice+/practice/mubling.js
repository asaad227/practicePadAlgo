function accum(s) {
	// your code
    let result = [];

   const lower = s.split("");
console.log(lower)
   for(let i = 0; i < lower.length; i++){

        result.push(lower[i].toUpperCase() + Array(i + 1).join(lower[i]).toLowerCase())
   
   }
        
  return result.join("-");
}

console.log(accum("ZpglnRxqenU"));