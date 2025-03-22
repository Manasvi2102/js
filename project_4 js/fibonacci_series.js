let n=Number(prompt('Enter the value of n: '));
let a=0, b=1, c;
console.log('Fibonacci Series:');
console.log(a);
console.log(b);
while(n>2){
    c=a+b;
    a=b;
    b=c;
    console.log(c);
    n--;
}