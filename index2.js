// Створити функцію, яка буде
// виводити в консоль привітання і
// ім'я.

const objSpecWords = [
  { name: "Alex", welcome: "Hello!", order: 1 },
  { name: "Dima", welcome: "Hi!", order: 2 },
  { name: "Vasya", welcome: "Good evening!", order: 3 },
];

function showGreeting() {
  console.log(`${this.name} ${this.welcome}`)
}

objSpecWords.forEach(objSpecWord => {
  showGreeting.call(objSpecWord)
  console.log(showGreeting.bind(objSpecWord));
})