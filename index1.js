// 0.
// Напишіть цикл for для пошуку парних чи непарних чисел
// В консолі повинно бути скількі парних та непарних.

const numbers = "123123433424234234";
let pair = 0;
let unpaired = 0;


for (let i = 0; i <= numbers.length; i += 1) {
    if ((+numbers[i]) % 2 === 0) pair += 1
    else unpaired +=1
}

console.log(`pair - ${pair}, unpaired- ${unpaired}`)



// "123123433424234234"
// 0,1,2,3,4,5,6,7
