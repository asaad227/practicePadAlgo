function pigIt(str){
    //Code here
    const num = [];
    const newArr = str.split(" ")
    console.log(newArr)
    for(let i = 0; i < newArr.length; i++){
        const re = /[^\w\s\']/g
        if(newArr[i].match(re) ){
            num.push([newArr[i]])
        }else{
            num.push([newArr[i].slice(1, newArr[i].length) + newArr[i].slice(0, 1) + "ay"])
        }
         
    }
   
 const result = num.join(" ");
 return result;
  }
const jim = 'Pig latin is cool'
  console.log(pigIt('O tempora o mores !ay'))