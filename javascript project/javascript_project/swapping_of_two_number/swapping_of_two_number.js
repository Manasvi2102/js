function swapNumbers(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let temp = num1;
    let swappednum1 = num2;
    let swappednum2 = temp;

    let ans= document.getElementById('result');
    ans.innerHTML = `Before swapping: Number 1 = ${num1}, Number 2 = ${num2}.<br>After swapping: Number 1 = ${swappednum1}, Number 2 = ${swappednum2}.`;
}