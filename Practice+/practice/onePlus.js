function onePlus(arr){
    // array need +1 
    const newArr = arr.join("");
    const result = Number(newArr) + 1;
    const newI = []
   const re = result.toString().split("");
   for(i = 0; i < re.length; i++){
    newI.push(parseInt(re[i]))
   }
return newI;

}

const num = [4, 9, 9, 9]
console.log(onePlus(num))