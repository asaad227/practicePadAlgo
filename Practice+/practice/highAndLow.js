function highAndLow(numbers){
    // ...
    
    // as this is string need to split to separated into array 
    // need to loop through the array 
    //make if condition through to find highest number from the array
    // find the lowest number from the array 

    const result = [];
    const nums = numbers.split(" ");
    
    const newNums = nums.sort((a,b) => a - b);

    result.push(newNums[0]);
    result.push(newNums[newNums.length - 1]);

    return result.join(" ");

    
    
}


console.log(highAndLow("20 1 26 27"));