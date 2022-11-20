function palindrome(isPalindrome){
let reverseNum = isPalindrome.toString().split("").reverse().join("");
console.log(reverseNum)
if(reverseNum.toString() === isPalindrome.toString()){
    return true;
}else{
    return false;
}
}

console.log(palindrome(121))