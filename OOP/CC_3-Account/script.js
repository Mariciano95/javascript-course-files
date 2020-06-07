// Let’s build upon a previous account object exercise. A bank account is still defined by:
// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.

class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    credit(value) {
        this.balance += value;
    }
    describe() {
        return `Name: ${this.name}\nBalance: ${this.balance}`;
    }
}