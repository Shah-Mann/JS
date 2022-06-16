const account = {
  name: "Mann",
  expenses: [],
  incomes: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.incomes.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSumamry: function () {
    let totalExpenses = 0;
    let totalIncomes = 0;
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    this.incomes.forEach(function (income) {
      totalIncomes = totalIncomes + income.amount;
    });
    let balance = totalIncomes - totalExpenses;
    return `${this.name} has a blance of $${balance}, and income of $${totalIncomes} and $${totalExpenses} in expenses`;
  },
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 10);
account.addIncome("Job", 1000);
console.log(account.getAccountSumamry());
