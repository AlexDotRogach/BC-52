// Дано масив з рядками.
// Створіть функцію,
// яка переверне символи кожного рядка
// у зворотному порядку.

const strings = ["java", "sql", "javaScript", "c++", "node"];

// result - [ "avaj", "lqs", "tpircSavaj", "++c", "edon" ]


function reverseWord(word){
    return word.split("").reverse().join("");
}

function reverseWords (array) {
    const newArray = array.map(reverseWord);
 
    return newArray;
}

console.log(reverseWords(strings));

// console.log(["test", "test"].map(item => {
//     return item.slice(0, 1)
// }));


// split - arr
// join - str