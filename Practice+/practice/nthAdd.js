function SeriesSum(n){
    let sum = 0;
    for(let i = 0; i < n; i++){ 
        sum += 1/(1 +( i * 3))
    
    
    }
    return sum;

    
}

console.log(SeriesSum(4).toFixed(2))