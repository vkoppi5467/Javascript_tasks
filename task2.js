function calculateSalary(monthlyPayScale,deductions){
    const currentSalary = 25000;
    deductions = currentSalary*0.02;
    console.log(deductions);
    finalSalary = currentSalary - deductions + monthlyPayScale;
    return finalSalary;
}
console.log(calculateSalary(5000))