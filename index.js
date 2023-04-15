// Визначити клас Reader, який зберігає таку інформацію про користувача бібліотеки:

// ПІБ,
// номер читацького квитка,
// факультет,
// Методи takeBook(), returnBook().
// Розробити програму, у якій створюється масив об'єктів цього класу.
// Перевантажити методи takeBook(), returnBook():
// - takeBook, який прийматиме кількість взятих книг. Виводить на консоль повідомлення "Alex  взяв 3 книги".
// - takeBook, який прийматиме змінну кількість назв книг. Виводить на консоль повідомлення "Alex. взяв книги: Пригоди, Словник, Енциклопедія".
// - takeBook, який прийматиме змінну кількість об'єктів класу Book (створити новий клас, що містить ім'я та автора книги).
//  Виводить на консоль повідомлення "Alex взяв книги: Пригоди, Словник, Енциклопедія".
// Аналогічно перевантажити метод returnBook(). Виводить на консоль повідомлення 
// "Alex повернув книги: Пригоди, Словник, Енциклопедія". Або "Alex повернув 3 книги".

const faculties = ["gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

const books = [
  {
    "author": "Эрнест Хемингуэй",
    "name": "Старик и море",
    "amount" : 3
  },
  {
    "author": "Федор Достоевский",
    "name": "Преступление и наказание",
    "amount" : 5
  },
  {
    "author": "Лев Толстой",
    "name": "Война и мир",
    "amount" : 6
  },
  {
    "author": "Джордж Оруэлл",
    "name": "1984",
    "amount" : 2
  },
  {
    "author": "Джейн Остин",
    "name": "Гордость и предубеждение",
    "amount" : 3
  }
]

const readers = [
  {
    name : "Alex",
    surname : "Test",
    number_ticket: 11111,
    faculty: "gryffindor"
  },
  {
    name : "Dima",
    surname : "Test1",
    number_ticket: 11112,
    faculty: "Slytherin"
  },
  {
    name : "Vasya",
    surname : "Test2",
    number_ticket: 11113,
    faculty: "Slytherin"
  },
  {
    name : "Sergie",
    surname : "Test3",
    number_ticket: 11114,
    faculty: "Ravenclaw"
  },
  {
    name : "Slava",
    surname : "Test4",
    number_ticket: 11115,
    faculty: "Hufflepuff"
  },
]

class Reader {
  static Snotification = {
    error : {
      errorByTicketId : "Id isn`t correct",
      errorByBook : "Some trobules with books"
    },
    success : {
      successTakeBook : (name, amount, nameBook) => `${name} взяв ${amount} книги, назва - ${nameBook}`,
      successReturnBook :(name, amount, nameBook) => `${name} повернув книгy: ${nameBook} - кількість: ${amount}.`
    }
  }

  #readers;
  #books;
  #statics = {};

  constructor (readers, books) {
    this.#readers = readers;
    this.#books = books;
  }

  get getStatic() {
    return {...this.#statics}
  }

  get getBooks() {
    return [...this.#books]
  }

  takeBook (idTicket, amount, nameBook) {
    const isReaderId = this.#readers.some(reader => reader.number_ticket === idTicket)

    if (!(isReaderId)) {
      console.log(Reader.Snotification.error.errorByTicketId);
      return;
    }

    const isBook = this.#books.some(book => book.name === nameBook && book.amount >= amount)

    if (!(isBook)) {
      console.log(Reader.Snotification.error.errorByBook);
      return;
    }

    const reader = this.#readers.find(reader => reader.number_ticket === idTicket);

    console.log(Reader.Snotification.success.successTakeBook(reader.name, amount, nameBook));

    const ourBook = this.#books.find(book => book.name === nameBook);

    if (this.#statics[reader.name]) {
      this.#statics[reader.name] = [...this.#statics[reader.name], {...ourBook, amount : amount}]
    } else {
      this.#statics[reader.name] = [{...ourBook, amount : amount}];
    }

    ourBook.amount -= amount;
  }

  returnBook (idTicket, amount, nameBook) {
    const whoReturn = this.#readers.find(reader => reader.number_ticket === idTicket);

    if (!whoReturn) {
      console.log(Reader.Snotification.error.errorByTicketId);
      return;
    }

    const booksByThisPerson = this.#statics[whoReturn.name];

    const book = booksByThisPerson.find(book => book.name === nameBook);

    if (!(book && book.amount >= amount)) {
      console.log(Reader.Snotification.error.errorByBook);
      return;
    }

    this.#books.find(book => book.name === nameBook).amount += amount;

    console.log(Reader.Snotification.success.successReturnBook(whoReturn.name, amount, nameBook));

    if (book.amount === amount) {
      const indexBook = booksByThisPerson.findIndex(book => book.name === nameBook);

      booksByThisPerson.splice(indexBook, 1);

      return;
    } 

    book.amount -= amount;
  }
}

const mainReader = new Reader(readers, books)

mainReader.takeBook(11112, 3, "Война и мир")
mainReader.takeBook(11112, 2, "Преступление и наказание")
mainReader.takeBook(11111, 2, "Преступление и наказание")

mainReader.returnBook(11112, 3, "Война и мир")
mainReader.returnBook(11112, 2, "Преступление и наказание")

console.log(mainReader.getStatic);
console.log(mainReader.getBooks);
