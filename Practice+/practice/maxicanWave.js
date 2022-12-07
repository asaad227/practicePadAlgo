function wave(str){
    const newArr = [];
 
    for(let i = 0; i < str.length; i++){
        let letters = str.split("");
        //need to splited the words
        letters[i]=letters[i].toUpperCase()
        //capitalized all the index's
        if(letters[i] !== ""){
            //checking empty spaces 
            newArr.push(letters.join(""))
            //join rest of the letters
            
        }
       
    }

return newArr;
}

const words = "hello"

console.log(wave(words))