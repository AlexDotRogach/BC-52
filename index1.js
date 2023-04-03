// Потрібно викинути мусор з массива, якщо там є
// null, undefined, true, false то видаляємо та
// Виводемо скільки мусора ми знайшли

// const arr = [1, 2, true, 3, undefined, "str", null, "asd", false]; --> [1,2,3,"str","asd"]

const arr = [1, 2, true, 3, undefined, "str", null, "asd", false];

const result = [];
let amountOfGarbage = 0;
const blackList = [true, undefined, null, false]

for(const item of arr) {
    if (blackList.includes(item)){
        amountOfGarbage+=1;
        continue;
    }

    result.push(item)
}

console.log(result);


