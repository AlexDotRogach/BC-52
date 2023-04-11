// Написати функцію showAllFriends
// так, щоб вона виводила всіх друзів

const users = [
  {
    name: "Student1",
    friends: ["Student2", "Student3", "Student4"],
  },
  {
    name: "Student2",
    friends: ["Student2", "Student3"],
  }
]



// function showAllFriends(){
//   console.log(this.friends);
// }

// users.forEach((user) => { 
//   showAllFriends.call(user)
// })



// function showAllFriends(user){
//   console.log(user.friends);
// }

// users.forEach((user) => { 
//   showAllFriends(user)
// })