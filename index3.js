// Дано масив з рядками.
// Створіть функцію яка
// буде приймати масив та
// зробить великим перший символ кожного рядка.

const strings = ["java", "sql", "javaScript", "c++", "node"];


console.log(strings.map(string => `${string[0].toUpperCase()}${string.slice(1, string.length)}`));