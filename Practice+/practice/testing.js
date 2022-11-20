const obj = [{
    id:1,
    firstName: "Ahammed",
    secondName: "Saad",
    dob: "01/02/83"
},
{
    id:3,
    firstName: "Arham",
    secondName: "Saad",
    dob: "19/02/19"  
},
{
    id:3,
    firstName: "Riyan",
    secondName: "Mustafiz",
    dob: "02/01/87"
}];
// const item = document.querySelector(".item");
var btn = document.querySelector(".add")
var delBtn = document.querySelector(".del")
var num = obj.map(e=>  e.firstName?{...e, qty:1}: e);
var newArr;
function display(){
    const item = document.querySelector(".item");
    const firstName = document.querySelector(".firstName")
    const dob = document.querySelector(".dob")
        item.innerHTML = `Qty: ${num[0].qty} Price: £10 Total Price: £${num[0].qty * 10}`
        firstName.innerHTML =`${num[0].firstName} ${num[0].secondName}`
        dob.innerHTML = `${num[0].dob}`
}
function itemAdd(){
    display()
        newArr = num.map((e)=>e.qty? {...e, qty:e.qty++} : e)
        console.log(newArr)
      
}
function itemDel(){
    display()
    newArr = num.map((e)=>e.qty? {...e, qty:e.qty--} : e)
   console.log(newArr)
}
btn.addEventListener("click", itemAdd);
delBtn.addEventListener("click", itemDel);
