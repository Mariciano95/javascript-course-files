const calculate = (a, sign, b) => {
    if (sign === '+') {
        return a + b;
    }
    if (sign === '-') {
        return a - b;
    }
    if (sign === '*') {
        return a * b;
    }
    if (sign === '/') {
        return a / b;
    }
    return undefined;
}