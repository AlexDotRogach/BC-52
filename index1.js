// 1.
// Написати сценарій, який буде виводити
// кількість символів введеного рядка.
// Користувач буде вводити рядок в prompt,
// а результат буде виводитися за допомогою alert.
// якщо кількість більше 5 то виводити "багато букв"
// меньше "мало букв"

const stringFromUser = prompt("Write some strings");
const more = stringFromUser.length >= 5 && "багато букв";
const less = stringFromUser.length < 5 && "мало букв";
const result = more || less; 

alert(result)
