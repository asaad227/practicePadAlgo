const myArr = Array(10).fill("btn");

const myMap = myArr.map((v , i)=> {
    if(i%2 === 0){
       return v + "even"
    }else{
        return v + "odds"
    }

})
console.log(myMap)