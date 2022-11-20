// function sorting(nim){
//     const nums = {};

//     nim.forEach(e => {
     
//         nums[e] = (nums[e] || 0) +1 ;
        
//     });

  
   
//     return nums;
//   }

//   console.log(sorting([1,2,3,1,1]))



  function musking(num){
    let last4 = num.slice(-4);
    let other = num.slice(0,-4);
    for(let i = 0; i < num.length -4; i++){
        other = other.replace(num[i], "#")
    }
   return other + last4
  }

console.log(musking("123456789"))

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

  console.log(createPhoneNumber("1234567890"))

  const item = "samir";

  console.log(item.length)