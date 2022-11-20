function multi(size) {
    // insert code here
    
    const newArr =[];
    
    for(let i = 0; i < size; i++){
      newArr[i] = [];
    for(let j = 0; j < size; j++){
      newArr[i][j] = (i+1)*(j+1);
    }
    }


    

    console.log(newArr)
    // subarray will multiply by 2nd index;
  }
  
  console.log(multi(3))

  function sorting(nim){
    const nums = {};

    nim.forEach(e => {
     console.log(nums[e]) 
    });

  
   
    return nums;
  }
 
console.log(sorting([-1,2,-3,4,-2,-3,4,6]))
  const newsN = [-1,2,-3,4,-2,-3,4,6]
const sorted = newsN.sort((a,b)=> b-a)
console.log(sorted)