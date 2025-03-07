function calculate() {
    let chemistry = Number(document.getElementById("chemistry").value);
    let hindi = Number(document.getElementById("hindi").value);
    let maths = Number(document.getElementById("maths").value);
    let physics = Number(document.getElementById("physics").value);


    let totalMarks = chemistry + hindi + maths + physics;
    let percentage = (totalMarks / 400) * 100;
    let grade = "";
    if (chemistry < 0 || hindi < 0 || maths < 0 || physics < 0) {
        document.getElementById("result").innerHTML = "Invalid Input";
        return;
    }
    else if (chemistry > 100 || hindi > 100 || maths > 100 || physics > 100) {
        document.getElementById("result").innerHTML = "Invalid Input";
        return
    }



    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 40) {
        grade = "C";
    }

    else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        `Your total marks are ${totalMarks}/400.<br> 
        Percentage: ${percentage.toFixed(2)}%.<br>
        Grade: ${grade}.`;
} 