let family = {
    incomes: [2000, 3100, 4000],
    expenses: [1000, 200, 99, 350.90, 800, 2100]
}

function sum(array) {
    let total = 0
    for (let value of array){
        total += value;
    }
    
    return total
}

function calculateBalance () {
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);

    const total = calculateIncomes - calculateExpenses
    const istOk = total >=0

    let balanceText = "negativo"
    
    if (istOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo foi ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()