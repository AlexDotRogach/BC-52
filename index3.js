// Порахуйте скільки повторюваних значень
// у масиві та видаліть дублікати
// result:
// [1,1,3,4,5,6,7,8,9,12,9,9,7] => our arr: 1,3,4,5,6,7,8,9,12
//                                 Repeated elements: 1,9,9,7

const arrNumbers = [1, 1, 3, 4, 5, 6, 7, 8, 9, 12, 9, 9, 7];
const arrClear = []
const arrRepeated = []

// for (const number of arrNumbers){
//    if (arrClear.includes(number)) {
//     arrRepeated.push(number)
//     continue
//    } 

//     arrClear.push(number)
// }

// console.log(`
//     our arr: ${arrClear}
//     Repeated elements: ${arrRepeated}
// `)

 for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers.indexOf(arrNumbers[i]) !== i) {
        arrNumbers.splice(arrNumbers.indexOf(arrNumbers[i]), 1);
        i -= 1
    }
 }

 console.log(arrNumbers)
 









// our arr: 1,3,4,5,6,7,8,9,12
// Repeated elements: 1,9,9,7

// 1, 1, 3, 4, 5, 6, 7, 8, 9, 12, 9, 9, 7 --> 


// 1. Перебирати 
// 2. перевірити чи є цей елемент в arrClear 
// 3. класти елемент в arrClear або в arrRepeated (в залежності умови)



