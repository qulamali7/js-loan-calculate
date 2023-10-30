function loan(payment, month) {
    let amount = payment / month
    let balance = payment % month
    let endMonth = +amount.toFixed() + balance
    for (let i = 1; i < month; i++) {
        if (month / 2 < balance) {
            console.log(`${i}-ci ay ${amount.toFixed() - 1} manat`);
        } else {
            console.log(`${i}-ci ay ${amount.toFixed()} manat`);
        }
    }
    if (month / 2 < balance) {
        return `${month}-ci ay ${endMonth - 1} manat`;
    }
    else {
        return `${month}-ci ay ${endMonth} manat`;
    }
}
console.log(loan(8000, 12));


