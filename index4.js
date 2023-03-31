// Потрібно дістати кожну першу букву та вивести їх через крапку в більшому регістрі
// I am a student again --> S.A
// Якщо в нас слово має тільки дві букви або одну то пропускаємо

const phase = "I am a student again";
let result = '';
let part = '';

for(let i = 0; i < phase.length; i++){
    if (phase[i] === " ") {``
        continue;
    }

    if (phase[i+1] === ' ') {
        if (part.length > 2) {
            result += part[1].toUpperCase() + ".";
        }
        part = "";
    }

    if (i === phase.length - 1) {
        if (part.length > 2) {
            result += part[1].toUpperCase() + ".";
        }
    }

    part += phase[i];
}

console.log(result.slice(0, -1));

//0. формувати рядок 
//1. for 
//2. next element - " " - 
//3. Перевірка довжини рядка  - <= 2 - рядок видаляємо і не додаємо до резалту.

