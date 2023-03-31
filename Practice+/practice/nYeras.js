function howManny(p0, per, aug, p){
    let total = p0;
    total = total + (p0 * per/100 + aug)
    console.log(total)
    const count = []
    while(total < p){
        total = total + (p0 * per/100 + aug)
        // console.log(total)
        count.push(1)
    }
    
    console.log(count.length)

   
}

console.log(howManny(1000, 2, 50, 1213))