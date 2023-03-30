// 2.
// Написати сценарій, якій буде
// виводити чи парне введене число.
// Якщо так виводити за допомогою alert - так парне,
// якщо ні то - не парне.

const numberFromUser = prompt("Введите число");
const pair = numberFromUser % 2 === 0 && "парне";
const unpaired = numberFromUser % 2 > 0 && "не парне";

alert(pair || unpaired);