
function scramble(str1, str2){
    let result;
    const newArr = str1.split("").sort().join("");
    const newSub = str2.split("").sort().join("");
    if(str1.length === str2.length){
        result = newArr === newSub;
    }
    
    if(str1.length !== str2.length){
       const final = str2.split("").map(e=> str1.includes(e));
       if(final.includes(false)){
        result = false;
       }else{
        result = true;
       }
    }

    return result;
}



console.log(scramble('cedewaraaossoqqyt', 'codewars'   ));//true
console.log(scramble('katas',             'steak'      ));//false
console.log(scramble('scriptjavx',        'javascript' ));//false
console.log(scramble('scriptingjava',     'javascript' ));//true
console.log(scramble('scriptsjava',       'javascripts'));//true
console.log(scramble('javscripts',        'javascript' ));//false
console.log(scramble('jscripts',          'javascript' ));//false
console.log(scramble('aabbcamaomsccdd',   'commas'     ));// true
console.log(scramble('commas',            'commas'     ));//true
console.log(scramble('sammoc',            'commas'     ));//true