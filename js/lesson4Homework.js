// //1.Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr 
// і два числа (first и second) – порядкові номери елементів масиву, які необхідно 
// скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція 
// повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або 
// обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю 
// функцію, передбачте обробку можливих винятків.

function sumSliceArray(arr, first, second) {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array.');
    }
  
    if (typeof first !== 'number' || typeof second !== 'number') {
      throw new Error('Indices should be numbers.');
    }
  
    if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
      throw new Error('Indices are out of bounds.');
    }
  
    return arr[first] + arr[second];
  }
  
  const inputArr = [1, 2, 3, 4, 5, 6];
  const firstIndex = 5;
  const secondIndex = 4;
  
  try {
    const result = sumSliceArray(inputArr, firstIndex, secondIndex);
    console.log(`sum of elements with indices ${firstIndex} and ${secondIndex}: ${result}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
  

// 2.Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та 
// статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, 
// якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field 
// is empty! Please enter your age з типом помилки Error). У полі статус введено 
// неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. 
// У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці 
// catch передбачена можливість виведення назви та опису помилки.

function checkAge() {
    try {
      const name = prompt("Enter your name:");
      const age = prompt("Enter your age:");
      const status = prompt("Enter your status (admin, moderator, user):");
  
      if (!name || !age || !status) {
        throw new Error("The field is empty! Please enter your data.");
      }
  
      const numericAge = parseInt(age);
      if (isNaN(numericAge)) {
        throw new TypeError("Age must be a number.");
      }
  
      if (numericAge < 18 || numericAge > 70) {
        throw new RangeError("Age must be between 18 and 70.");
      }
  
      if (status !== "admin" && status !== "moderator" && status !== "user") {
        throw new EvalError("Invalid status.");
      }
  
      alert("You have access to watch the movie!");
    } catch (error) {
      alert(`Error: ${error.name}\nDescription: ${error.message}`);
    }
  }

  checkAge();

// 3.Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 
// параметри ширина прямокутника width і висота прямокутника height і 
// обраховує його площу. Передбачити припинення виконання програми і 
// генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height)) {
      throw new TypeError('Both width and height should be numeric values.');
    }
  
    return width * height;
  }
  
  try {
    const width = parseFloat(prompt('Enter the width of the rectangle:'));
    const height = parseFloat(prompt('Enter the height of the rectangle:'));
  
    const area = calcRectangleArea(width, height);
    console.log(`Area of a rectangle with width ${width} and height ${height} is equal to ${area}`);
  } catch (error) {
    console.error('Error:', error.message);
  }


// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле 
// name значенням MonthException.Реалізуйте функцію showMonthName(month), в якій параметр month
//  – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного 
//  номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException 
//  з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:

  class MonthException {
    constructor(message = "Incorrect month number") {
        this.name = "MonthException";
        this.message = message;
    }
}

function showMonthName(month) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (month < 1 || month > 12) {
        throw new MonthException();
    }

    return months[month - 1];
}

try {
    const monthNumber = parseInt(prompt("Enter the month number:"));
    const monthName = showMonthName(monthNumber);
    console.log(`The name of the month is ${monthName}`);
} catch (error) {
    if (error instanceof MonthException) {
        console.log(`Error: ${error.message}`);
    } else {
        console.log("An error occurred:", error);
    }
}

// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, 
// який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє 
// з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної 
// ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де 
// значеннями ключів є коректні елементи ids.


class NegativeIdError extends Error {
  constructor(message) {
      super(message);
      this.name = "NegativeIdError";
  }
}

function showUser(id) {
  if (id < 0) {
      throw new NegativeIdError("User ID cannot be negative");
  }
  
  return { id };
}

function showUsers(ids) {
  const users = [];

  for (const id of ids) {
      try {
          const user = showUser(id);
          users.push(user);
      } catch (error) {
          if (error instanceof NegativeIdError) {
              console.log(`Error: ${error.message} (ID: ${id})`);
          } else {
              console.log("An error occurred:", error);
          }
      }
  }

  return users;
}




const test  = showUsers([7, -12, 44, 22]);
console.log(test);