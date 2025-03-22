function checkPalindrome(abc) {    
    const len1 = abc.length;  
    for (let i = 0; i < len1 / 2; i++) {  
        if (abc[i] !== abc[len1 - 1 - i]) {  
          alert( 'It is not palindrome'); 
          return;
        }  
    }  
    alert( 'It is a palindrome');  
}  
const string = prompt('Enter a string or number to check for Palindrome: ');  
const value = checkPalindrome(string);  
console.log(value);  
