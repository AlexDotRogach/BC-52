// Напишіть функцію getAvgSalary(emp),
// яка приймає масив об'єктів
// із властивістю salary та повертає середню заробітну плату.

const employees = [
    { name: "Nikita", salary: 500 },
    { name: "Vladimir", salary: 700 },
    { name: "Vasya", salary: 350 }
] 



console.log(
    employees.reduce((accum, employee) => {

        accum += employee.salary;
    
        return accum;
    }, 0) / employees.length
);

