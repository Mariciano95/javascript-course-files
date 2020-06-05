const sayHello = (first, last) => `Hello, ${first} ${last}`;

let firstName = prompt('Enter first name:'),
    lastName = prompt('Enter last name:');
console.log(sayHello(firstName, lastName));

