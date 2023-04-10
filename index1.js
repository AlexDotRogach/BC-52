// Написати функцію,
// яка поверне массив об'єктів,
// але замість імені буде перегорнуте ім'я

let users = [
  { id: "john", name: "John Smith", age: 16 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function reverseWord (str) {
  return str.split("").reverse().join("")
}

function getReversName (array) {
   return array.map(user => {
    const [name, surname] = user.name.split(' ');

    return  {...user, name: `${reverseWord(name)} ${surname}` }
   })
}

console.log(getReversName(users));
