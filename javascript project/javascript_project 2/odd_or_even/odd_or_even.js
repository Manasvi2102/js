document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the value from the input field
    const number = parseInt(document.getElementById('numberInput').value);
    
    // Check if the number is even or odd
    const resultDiv = document.getElementById('result');
    if (number % 2 === 0) {
        resultDiv.textContent = `${number} is an even number.`;
        resultDiv.style.color = 'green';
        
    } else {
        resultDiv.textContent = `${number} is an odd number.`;
        resultDiv.style.color = 'red';
        
    }
});