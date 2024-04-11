const form = document.getElementById('expense-form');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');
const expenseList = document.getElementById('expense-list');

let expenses = [];

// Get expenses from local storage
function getExpenses() {
    const localStorageExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (localStorageExpenses) {
        expenses = localStorageExpenses;
        expenses.forEach(addExpenseToDOM);
    }
}

// Add expense to DOM and update local storage
function addExpenseToDOM(expense) {
    const sign = expense.amount < 0 ? '-' : '+';
    const item = document.createElement('li');

    item.classList.add(expense.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `
        ${expense.text} <span>${sign}$${Math.abs(expense.amount)}</span>
        <button class="delete-btn" onclick="deleteExpense(${expense.id})">x</button>
    `;
    expenseList.appendChild(item);
}

// Add new expense
function addExpense(e) {
    e.preventDefault();

    if (textInput.value.trim() === '' || amountInput.value.trim() === '') {
        alert('Please enter both a description and an amount.');
        return;
    }

    const expense = {
        id: generateID(),
        text: textInput.value,
        amount: +amountInput.value
    };

    expenses.push(expense);
    addExpenseToDOM(expense);
    updateLocalStorage();
    textInput.value = '';
    amountInput.value = '';
}

// Generate ID
function generateID() {
    return Math.floor(Math.random() * 100000000);
}

// Delete expense
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateLocalStorage();
    init();
}

// Update local storage
function updateLocalStorage() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Initialize
function init() {
    expenseList.innerHTML = '';
    getExpenses();
}

// Event listeners
form.addEventListener('submit', addExpense);

// Initialize app
init();
