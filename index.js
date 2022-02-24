let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

console.log("hello")
for(let i =0; i < weeklyExpenseQuestions.length; i++)
{
    console.log("hello")
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer;
}


for(let i =0; i < monthlyExpenseQuestions.length; i++)
{
    console.log("hello")
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer;
}


for(let i =0; i < annualExpenseQuestions.length; i++)
{
    console.log("hello")
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer;
}


