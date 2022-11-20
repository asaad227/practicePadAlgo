function moveZeros(arr) {
    const filtered = arr.filter(e => e !== 0);
    const newLength = arr.length - filtered.length;
    for(let i = 0; i < newLength; i++){
        filtered.push(0)
    }
    
return filtered;
  }

  const arr1 = [false,1,0,1,2,0,1,3,"a"];

  console.log(moveZeros(arr1))