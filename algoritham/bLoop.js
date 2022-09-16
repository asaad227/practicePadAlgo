function bLoop(list, item){
    let low = 0;
    let high = list.length - 1;
    console.log(high, low)
    for(let i = 0; i < list.length; i++){
        let mid = Math.floor((high + low)/2);
        console.log("mid point", mid)
        if(list[mid] === item){  
            return mid
        }

        if(item < list[mid]){
            high = mid - 1;
          
        }else{
            low = mid +1;
            
        }
    }

    return -1;
}


console.log(bLoop([2,3,4,5,6,7,8,9,10,11,12,14], 11))