// Вивести перші букви ключів об'єкта,
// Та створити функцію яка повертає об'єкт
// з кількістю повторення букв

const objValues = {
  first: "valueFirst",
  second: "valueSecond",
  third: "valueThird",
  fourth: "valueFourth",
  Fifth: "valueFifth",
  sixth: "valueSixth",
};

function getObjectByFirstLetter(obj) {
  const result = {}
  const keysByObj = Object.keys(obj);

  for (const key of keysByObj) {
    const keyInResult = key[0].toLowerCase();

    result[keyInResult] = result[keyInResult] ? result[keyInResult] + 1 : 1
  }

  // for (const key in obj) {
    
  //   if (result[key[0].toLowerCase()]){
  //     result[key[0].toLowerCase()] += 1
  //   } else {
  //     result[key[0].toLowerCase()] = 1
  //   }
  // }


  
  return result
}

console.log(getObjectByFirstLetter(objValues)); 




// const test = {};

// console.log(test.key);

// {
//   f: 3,
//   s: 2,
//   t: 1
// }
