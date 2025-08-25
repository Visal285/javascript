let expenses = [120, 75, 300, 50];
let totalExpense = 0;

expenses.forEach(function(expense) {
  console.log("Expense: " + expense + "$");
  totalExpense += expense;
});

console.log("Total Expense: " + totalExpense + "$");

