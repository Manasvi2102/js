// Capitalize First Letter of Each Word in a String

let cap=prompt("Enter a string: ")
let arr=cap.split(" ");
let ans="";
for(let i=0;i<arr.length;i++){
    ans+=arr[i].charAt(0).toUpperCase()+arr[i].slice(1)+" ";
}

alert(ans);