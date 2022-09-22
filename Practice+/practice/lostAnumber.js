function findDeletedNumber(arr, mixArr) {
    // your code
    // filtered mixArr with the arr 

 const mix = mixArr.sort((a, b)=> a-b);
    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] !== mix[i]){
            return arr[i]
        }
       
    }
   return 0;
  }
const arr = [1,2,3,4,5,6,7,8,9];
const mixArr = [1,9,7,4,6,2,3,8]
console.log( findDeletedNumber(arr, mixArr))
 


