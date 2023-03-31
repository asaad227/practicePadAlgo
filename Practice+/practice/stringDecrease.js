function add(index){
    let total = 0;
    for(let i = 0; i < index.length; i++){
      if(index[i]){
        total += index[i]/i;
      }
    }

    console.log(total)
}

console.log(add([1,2,3]))