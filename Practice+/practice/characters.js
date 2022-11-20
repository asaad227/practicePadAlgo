// const alpha = Array.from(Array(94)).map((e, i)=> i+33);
// console.log(alpha)
// const alphabet = alpha.map((e)=> String.fromCharCode(e));
// console.log(alphabet)


// const password =[alphabet[Math.ceil(Math.random()* 94)], alphabet[Math.ceil(Math.random()* 94)], alphabet[Math.ceil(Math.random()* 94)]]

// console.log(password)

const  arr = {a:3, b:4, d:1};

const newArr = Object.entries(arr).sort((a, b )=> b[1] - a[1] )[0][0]

 console.log(newArr)