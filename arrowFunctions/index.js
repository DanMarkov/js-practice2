const fruits = ['apple', 'pineaplle', 'orange', 'banana'];

const [first, second, ...rest] = fruits;
console.log(second);
console.log(rest);