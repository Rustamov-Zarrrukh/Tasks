//№1
// ageAsk = +prompt("Ведите свой возраст!")

// function ageControler() {
//   if (ageAsk === 18) {
//     console.log("Добро пожаловать!");

//   }else if (ageAsk <= 0 ) {
//     console.log("Ты чё ДебилЁ");

//   }else if (ageAsk < 18) {
//     console.log("Вы не соответствуете возрасту!");

//   }
// }

// ageControler()

//№2
// let num1 = parseFloat(prompt("Введите первое число!"));
// let num2 = parseFloat(prompt("Введите второе число!"));
// let Ask = prompt("Введите знак!");

// function calculate(a, b, operator) {
//   if (operator === "+") {
//     return a + b;
//   } else if (operator === "-") {
//     return a - b;
//   } else if (operator === "/") {

//     return a / b;
//   } else if (operator === "*") {
//     return a * b;
//   }
// }

// console.log(calculate(num1, num2, Ask));

//№3
function maxName(...names) {
  return names.reduce((longest, current) =>
      current.length > longest.length ? current : longest
  );
}

console.log(maxName('Alex', 'George', 'Michael'));


