// function spinWords(string){
//     const newSt = string.split(" ");
//     const answer = []
//     for(let i = 0; i < newSt.length; i++){
//     newSt[i].length >= 5?answer.push(newSt[i].split("").reverse().join("")): answer.push(newSt[i]);
//     }
// console.log( answer.join(" "))
//     return answer.join(" ")
// }

function spinWords(string){
    return string.split(" ").map(words =>
    words.length > 4? words.split("").reverse().join(""):words).join(" ");
    
}




console.log(spinWords( "Hey fellow warriors" ))
// spinWords( "Hey fellow warriors" ) //returns "Hey wollef sroirraw"
// spinWords( "This is a test") //=> returns "This is a test" 
// spinWords( "This is another test" )//=> returns "This is rehtona test"