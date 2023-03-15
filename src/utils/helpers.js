export const fetchData = (key) => JSON.parse(localStorage.getItem(key));

export const randomColor = () => {
  const existingItems = fetchData('budgets')?.length ?? 0;
  return `${existingItems * 48} 50% 85%`;
};

export const removeData = ({ key }) => {
  localStorage.removeItem(key);
};

export const wait = () => {
  return new Promise((res) => setTimeout(res, Math.random() * 800));
};

export const createBudget = ({ name, amount }) => {
  const newItem = {
    _id: crypto.randomUUID(),
    name,
    amount,
    createdAt: new Date(),
    color: randomColor(),
  };

  const existingItems = fetchData('budgets') ?? [];
  return localStorage.setItem(
    'budgets',
    JSON.stringify([...existingItems, newItem])
  );
};

export const createExpense = ({ name, amount, budgetId }) => {
  const newExpense = {
    name,
    amount,
    _id: crypto.randomUUID(),
    createdAt: new Date(),
    budgetId,
  };

  const existingExpenses = fetchData('expense') ?? [];
  return localStorage.setItem(
    'expense',
    JSON.stringify([...existingExpenses, newExpense])
  );
};

export const formatCurrency = (amount) => {
  return amount.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  });
};

export const calculateSpent = (budgetId) => {
  const expenses = fetchData('expense') ?? [];
  return expenses.reduce((acc, budget) => {
    console.log(budget);
    if (budget.budgetId !== budgetId) return acc;

    return (acc += budget.amount);
  }, 0);
};

export const formatPercentage = (amount) => {
  return amount.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 0,
  });
};
