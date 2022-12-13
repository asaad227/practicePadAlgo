function faroShuffle(deckSize){
const result = [];
const sliced = deckSize.slice(0, deckSize.length / 2)
// as we going to mixed each index we will sliced the deck
for(let i = 0; i < sliced.length; i++){
    result.push(sliced[i], deckSize[i + deckSize.length/2])
    // here deckSize is 6, then half the deck + index 0 so push would be index 3
    // first loop slice[0] and deckSize[3]
    //second loop slice[1] and deckSize[4]
    // third loop slice[2] and deckSize[5]

}

//another solution below:
const neWresult = sliced.flatMap((card, i)=> [card, deckSize[i + deckSize.length / 2]])

return `I am the first part [${neWresult}] && I am the second [${result}]`;



  }

  console.log(faroShuffle(["ace", "two", "three", "four", "five", "six"]))