function allNonConsecutive (arr) {
   const result = []
    for(let i = 1; i < arr.length; i++){
        console.log(arr[i], arr[i-1]+1)
           if(arr[i] !== arr[i-1] + 1 ){
            result.push({i:i, n:arr[i]})
           }
          
        }

  return result;
  }

  console.log(allNonConsecutive([5,2,3,4,6,7,8,15,16]))