function calculateSalary(){
    let onedaysalary = Number(document.getElementById("onedaysalary").value);
    let empDays = Number(document.getElementById("empDays").value);
    let salary = onedaysalary * empDays;
    let result = document.getElementById("result");
    result.innerHTML = `Employee's Salary: ${salary}`;
    if(empDays < 0){
        result.innerHTML = `Invalid Input`;
    }
    else if(onedaysalary < 0){
        result.innerHTML = `Invalid Input`;
    }

}