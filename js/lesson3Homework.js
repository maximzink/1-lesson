///////////////
/////1 Завдання 
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри: початкове значення
// кінцеве значення а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)

function createArray(start, end) {
    const newArr = [];
    for (let i = start; i <= end; i++) {
        newArr.push(i);
    }
    return newArr;
}

const arr = createArray(2, 9);
console.log(arr);

///////////////
/////2 Завдання 
//Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому 
//a виводится 1 раз, число а+1 - два рази і т.д.

function naturalNum(start, end) {
    for (let num = start; num <= end; num++) {
        for (let i = 0; i < num - start + 1; i++) {
            console.log(num);
        }
    }
}

naturalNum(3, 6);

///////////////
/////3 Завдання 
//Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа 
//генеруються із діапазону 1-500.

function randArray(k) {
    const arr = [];
    for (let i = 0; i < k; i++) {
        const randomArr = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
        arr.push(randomArr);
    }
    return arr;
}

console.log(randArray(10));

// ///////////////
// /////4 Завдання
//Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.


function compact(arr) {
    const uniqueValues = [];

    arr.forEach((element) => {
        if (!uniqueValues.includes(element)) {
            uniqueValues.push(element);
        }
    });
    return uniqueValues;
}
const arr1 = [5, 3, 4, 4, 4, 4, 3, 5, 6, 7, 3];
console.log(compact(arr1)); // [5,3,4,6,7]
// ///////////////
// /////5 Завдання
// ///////////////

function filterArr(arr) {
    const arrNum = [];
    const arrString = [];
    
      for (let i = 0; i < arr.length; i++){
        const item = arr[i];
        if (typeof item === "string") {
        arrString.push(item)
      } else {
        arrNum.push(item)
      }
    }
    return {
      strings: arrString,
      numbers: arrNum};
    }
    
    let  arr = [5, "Limit", 12, "a", "3",[2, 4, 3, "33", "a", "text"], 99, 2, "strong", "broun"];
    console.log(filterArr(arr));

///////////////
/////6 Завдання
///////////////
function filterArr(arr) {
    const arrNum = [];
    const arrString = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "string") {
            arrString.push(arr[i])
        } else {
            arrNum.push(arr[i])
        }
    }
}


//     let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
//     let arrNew = funcName(arr);
//     console.log(arrNew);
// ///////////////
// /////6 Завдання
//Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат.
//Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

function calc(a, b, op) {
    let result = null;
    if (op === 1) {
        result = (a - b);
    } else if (op === 2) {
        result = (a * b);
    }
    else if (op === 3) {
        result = (a / b);
    } else {
        result = (a + b)
    }
    return result;
}

console.log(calc(2, 2, 1));
console.log(calc(2, 2, 3));
console.log(calc(2, 2, 7));

// ///////////////
// /////6 Завдання
//Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
//Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));


// // (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// // Створити функцію create() , яка приймає один аргумент у вигляді рядка. 
// // Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї 
// // аргумент збігається з аргументом зовнішньої функції.  
// // (потребує використання closure)

function create(argument) {
    return function (value) {
        return value === argument;
    };
}
const checkValue = create("test");
console.log(checkValue("test"));
console.log(checkValue("other"));