/*  I	1
    IV	4
    V	5
    X	10
    L	50
    C	100
    D	500
    M	1000 */

    function romanNumber(str){
        const obj = {I:1, IV: 4, V:5, X: 10, L:50, C:100, D:500, M:1000}
       const re = /[I IV V X L C D M]/g
       const result = str.match(re);
       const final = []

       for(let i =0; i < result.length; i++){
      console.log(Object.keys(obj))  
       }
        console.log(final)
    }

    console.log(romanNumber('IVIII'))