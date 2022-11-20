// function extractFileName(nam){
// const first =/[aA-zZ]+/ig
// const nim = /[.]\b[aA-zZ]+\b/ig
// const part1 =nam.match(first);
// const part2 = nam.match(nim)

// const result =  part1[0]+part2[0];

// const final = [];

// for(let i = 1; i < result.length; i++){
//     final.push(result[i])
// }
// return final.join('')
// }

const result ="1231231223123131_f7vod60yo8.84w.gz2"
// console.log(extractFileName("1231231223123131_FILE-NAME.EXTENSION.OTHEREXTENSION"))


// function exFileName(dirtyFileName){
//     const first = /[- aA-zZ 0-9]+/g;
//     const second =  /\b[.][0-9 aA-zZ]+/g;
//     const firstPart = dirtyFileName.match(first)
//     const secondPart = dirtyFileName.match(second)
//     const indexUnder = firstPart[0].indexOf("_")+1;
//     const exFirst = firstPart[0].slice(indexUnder, firstPart[0].length)
//     return exFirst+secondPart[0];
// }

// console.log(exFileName(result));
// const url = "www.xakep.ru"
// function exFile(nam){
//     let firstPart;
//     if(nam.includes("www")){
//         firstPart = nam.indexOf(".");
//     }else{
//         firstPart = nam.indexOf("/") + 1;
//     }
    
//     const lastPart = nam.lastIndexOf(".");
//     const result = nam.slice(firstPart+1, lastPart);
// console.log(lastPart)
//     return result;
// }

// console.log(exFile(url))

