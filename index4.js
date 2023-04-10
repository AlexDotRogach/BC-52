// Створіть функцію groupById(arr),
// яка створить з нього об'єкт з
// id як ключа(наприклад name в меньшому регістрі) 
// та елементами масиву як значення.

let users = [
    { id: "1", name: "John", age: 22 },
    { id: "2", name: "Ann", age: 23 },
    { id: "3", name: "Pete", age: 31 },
  ];


function groupById(arr, key){

  return users.reduce((acc, user) => {

    // variant 1 
    // acc[user[key]] = user
    // return acc;

    // variant 2 
    acc = {...acc, [user[key]] : user }
    return acc;
  }, {}) 
}

console.log(groupById(users, "age"));






// reduce((acc, elem) => {

// }, {})



// {
//   "22" : { id: "1", name: "John", age: 22 },

// }
  


