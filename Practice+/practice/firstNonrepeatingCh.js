function firstNonRepeatingLetter(s) {
const re = /./gm;
const chars = s.match(re);

const match = chars.filter((e, i)=> chars.indexOf(e) !== i);
const newArr = chars.filter(e => !match.includes(e));

const indexItem = newArr.indexOf("'");
const upperLetter = newArr.filter(e=> e === e.toUpperCase());

  if(newArr[indexItem] === newArr[0]){
    return "I am emptry"
  }if(newArr.includes(upperLetter[0])){
    return upperLetter.sort()[0];
  }else{
    return newArr[0]
  }
  
  }
  
    
  



//   if(s.length === 0 || s.length === null){
//     result =  ""
//   }else{
//     const chars = s.match(re);
//     console.log(chars)
//     const obj = {}
//    chars.forEach(e=>{
//     obj[e] =(obj[e] || 0) + 1
//     })
// console.log(obj)

//    const found = Object.keys(obj).filter(e=> obj[e] === 1);
//    if(found.length > 0){
//     result = found[0]
//    }else{
//     result = ""
//    }

//   }
  
  

const nim =["a", "a", "b","b" ].join("")
const nam = [ 'G',
'o',
' ',
'h',
'a',
'n',
'g',
' ',
'a',
' ',
's',
'a',
'l',
'a',
'm',
'i',
',',
' ',
'I',
'\'',
'm',
' ',
'a',
' ',
'l',
'a',
's',
'a',
'g',
'n',
'a',
' ',
'h',
'o',
'g',
'!' ].join("")


console.log(firstNonRepeatingLetter(nam))
console.log(firstNonRepeatingLetter(nim))
console.log(firstNonRepeatingLetter("stress"))
console.log(firstNonRepeatingLetter("a"))
console.log(firstNonRepeatingLetter("sTreSS"))


  // const re =/\w+\.pdf/g
  // const str = 'readme.md Document.pdf image.png music.mp4 manual.pdf';
  // const myArray = str.match(re);
  // console.log(myArray);
  
  // ["fee ", "fi ", "fo "]
  




