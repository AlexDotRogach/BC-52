// 1.
// За допомогою циклу for створіть новий рядок, додайте кожному элементу окрім 1 
// та останнього -.
// 1-2-3-4-5-6-7-8-9 - кінцевий результат

const numbers = "1243124234324123";
let result = "";

for (let i = 0 ; i < numbers.length; i+= 1) {
    result += `-${numbers[i]}`
}

console.log(result.slice(1))

const test = "test"

console.log(numbers + " " +  test);

console.log(`${numbers} ${test}`)


