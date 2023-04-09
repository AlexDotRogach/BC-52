// Є масив рядків потрібно реалізувати функцию 
// Яка на підрядки java виклиакає колбек функцію 
// яка повертає рядок супер! А на інші "так собі"

const strings = ["java", "sql", "javaScript", "c++", "node"];

function showMessage (arr) {

    const showMessageByCondition = element => {
        if (element.includes("java")) {
            console.log(`Super ${element}`)
            return;
        } 

        console.log(`Not super`) 
    }

    arr.forEach(showMessageByCondition);
}

showMessage(strings)