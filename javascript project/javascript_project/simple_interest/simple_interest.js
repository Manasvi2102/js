function calculateInterest() {
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var time = document.getElementById('time').value;

    if(principal<0 || rate<0 || time<0){
        document.getElementById('result').innerText = 'Please fill it correctly.';
    }
    else if (principal && rate && time) {
        var interest = (principal * rate * time) / 100;
        document.getElementById('result').innerText = 'Simple Interest: ' + interest;
    } 
    else {
        document.getElementById('result').innerText = 'Please fill in all fields.';
    }
}