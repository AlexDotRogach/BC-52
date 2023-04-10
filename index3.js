// Напишіть функцію unique(arr),
// яка повертає масив,
// що містить лише унікальні елементи arr.

const array = [1,23,4,23,1,4,23,1,4,23,3]

function unique(arr) {

    // const result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if (i === arr.indexOf(arr[i])) {
    //         result.push(arr[i])
    //     }
    // }

    // return result`


    return arr.filter((item, index, arr) => {
        return index === arr.indexOf(item)
    })
}


console.log(unique(array));