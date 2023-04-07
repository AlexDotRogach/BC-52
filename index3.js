// Є масив об'єктів потрібно на перебір виводити лише
// 2 ключі isPublic, rating

// додатково вивести середне число рейтингу

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  },
  {
    title: "Jacques Gluke",
    author: "Author",
    genres: ["adventure"],
    isPublic: false,
  },
];

for (const {rating = 0, isPublic} of books) {
  console.log(`rating - ${rating}, ${isPublic ? "public" : "private"}`)
}

function getAvgRatingByBooks(booksParam) {
  let total = 0;
  let divisionNumber = 0;

  for (const {rating = 0} of booksParam) {
    if (rating) divisionNumber += 1;
    
    total += rating;
  }

  return (total / divisionNumber).toFixed(2);
}

console.log(getAvgRatingByBooks(books))

// true - public
// false - private


// Math.ceil()
// Math.floor()
// Math.round()
// 1.toFixed(1)



// const arr = [14, 300, 32, 12, 43, -23];

// console.log(...arr);

// console.log(Math.max(...arr));