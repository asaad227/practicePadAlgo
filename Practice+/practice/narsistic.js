function narcissistic(value) {
    // Code me to return true or false
    const newArr = value.toString().split("");
    let sum = 0;
    for(let i = 0; i < newArr.length; i++){
        var nums = Number(newArr[i] ** newArr.length);
        sum+= nums
    }

   if(sum === value){
    return true
   }

   return false;
  }


  console.log(narcissistic(1652))
  