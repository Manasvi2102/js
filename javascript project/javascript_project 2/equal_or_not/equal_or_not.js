document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
   
    const resultDiv = document.getElementById('result');
    if (number1 === number2) {
        resultDiv.textContent = 'The numbers are equal.';
        
    } else {
        resultDiv.textContent = 'The numbers are not equal.';
        
    }
});