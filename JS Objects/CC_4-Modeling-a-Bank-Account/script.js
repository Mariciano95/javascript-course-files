const account = {
    name: 'Alex',
    balance: 0,
    credit(amount) {
        this.balance += amount;
        return this.balance;
    },
    describe() {
        return `Your name is ${this.name} and balance is ${this.balance}`;
    }
}