// Реалізуйте клас Worker (Працівник), який матиме
// такі властивості:
// name (ім'я), surname (прізвище), rate (ставка за день роботи), days 
// (кількість відпрацьованих днів).
// Також клас повинен мати метод getSalary(),
// який виводитиме зарплату працівника.
// Зарплата - це добуток (множення) ставки rate на
// кількість відпрацьованих днів days

// зробити можливість додавання відділу, але перевіряти чи є в нього відділ 
// якщо є то повертаємо помилку.

const workers = [
  { name: "Erick", surname: "Vasin", rate: 50, days: 21 }, 
  { name: "Dima", surname: "Test", rate: 20, days: 11 },
  { name: "Vasya", surname: "Test1", rate: 32, days: 5 }
];



class Worker {
  #department = [];

  constructor({name, surname, rate, days}) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    return this.rate * this.days;
  }

  get department () {
    return [...this.#department];
  }

  set department (newDepart) {

    if (this.#department.includes(newDepart)) {
      console.log ('Warning! Such department exists')
      return;
    }

    this.#department.push(newDepart)
  }
}


const instansesWorkers = workers.map(worker => new Worker(worker));

// console.log(instansesWorkers[0].department);

instansesWorkers[0].department.push("test")
instansesWorkers[0].department.push("test")
instansesWorkers[0].department.push("test")


// console.log(instansesWorkers[0].department);

// instansesWorkers[0].department.push("test")

// console.log(instansesWorkers[0].department);

instansesWorkers[0].department = "test";
instansesWorkers[0].department = "test";
instansesWorkers[0].department = "tesasdsat";

console.log(instansesWorkers[0].department );


