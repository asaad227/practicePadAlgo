function uniqe(a, b){
    const newArr = a.concat(b);
    const result = newArr.filter(e => newArr.indexOf(e) === newArr.lastIndexOf(e));
    //its filter out all the unique number
    return result;
}

function duplicate(a, b){
    const newArr = a.concat(b);
    const result = newArr.filter(e => newArr.indexOf(e) !== newArr.lastIndexOf(e));
    //its filter out all the duplicate values also all the indexs 
    return result;
}

function removeDuplicate(a, b){
    const newArr = a.concat(b);
    const result = newArr.filter((e,i) => newArr.indexOf(e) !== i);
    //its filter out all the duplicate values with out all the indexes 
    return result;
}

console.log("I am uniqe", uniqe([1,2,3,4,5,6],[2,3,5,4,7,5,8,9]))
console.log("I am all duplicate indexs values", duplicate([1,2,3,4,5,6],[2,3,5,4,7,5,8,9]))
console.log("I am remove all the duplicate values", removeDuplicate([1,2,3,4,5,6],[2,3,5,4,7,5,8,9]))