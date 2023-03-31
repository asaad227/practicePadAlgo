// function solution(frank, sam, tom) {
//     const fround = []
//     const sround = []
//     const tround = []
//   for(let i = 0; i < frank.length; i++){
//         if(frank[i]> sam[i] && frank[i] > tom[i]){
//           fround.push(1)
//         }
//         if(tom[i]> sam[i] && frank[i] < tom[i]){
//             tround.push(1)
//           }
//           if(frank[i]< sam[i] && sam[i] > tom[i]){
//             sround.push(1)
//           }
//   }

//     if(sround.length > tround.length && sround.length > fround.length){
//         return true;
//     }
//     if(fround.length > tround.length && fround.length > fround.length){
//         return true
//     }
//     if(tround.length > fround.length && tround.length > sround.length){
//         return true
//     }
// return false

// }

// console.log(solution([1,6,7,8],[0, 1, 2, 3] , [4,9,10,11]))


function cardGame(winningCard, cards) {
    const values = {J: 11, Q: 12, K: 13, A: 14};
    let sum = 0;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      console.log(card[1])
      const value = values[card[0]] || parseInt(card[0]);
      console.log(value)
      const suit = card[1];
      console.log(suit)
      if (suit === winningCard[1]) {
        sum += value;
      }
    }
    return sum;
  }

  console.log(cardGame(["J"],["1"]))