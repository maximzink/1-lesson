const yourLogin = prompt("Enter your login");
const yourEmail = prompt("Enter your email");
const yourPassword = prompt("Enter your password");

alert(`Dear ${yourLogin}, your email is ${yourEmail}, your password is ${yourPassword}`);


const isAdult = confirm("Are you of legal age?");

const secH = 60*60;
const secD = 60*60*24;
const secM = 60*60*24*30;


const dataTypes  = {
    String: "string", 
    Number: "number", 
    Boolean: "boolean", 
    Undefined: "undefined", 
    Null: "null", 
    Big_Int: "bigint"
// };
const validateAge = age => {
    // Start code here
    if(age>=18){
        console.log("You are of legal age");
    } else {
    console.log("You are too young");
    }
    // End code here
}

validateAge(18);

const primeNumbers = numsArr => {
  // Code here
  const  noRemainder= numsArr.filter(num => num%3 === 0 || num%5 === 0 || num%7 === 0 || num%11 === 0 || num%13 === 0);
  return noRemainder;
}

console.log(primeNumbers([13, 2, 4, 7]));
console.log(primeNumbers([12, 2, 4, 87]));
console.log(primeNumbers([26, 22, 44, 49]));
console.log(primeNumbers([122, 424, 43, 16]));
console.log(primeNumbers([122, 424, 43, 16]));

const greetings = time => {
  // Your code
  if (time >= 23 || time < 5) {
    return "Good night";
  } else if (time >= 5 && time < 11) {
    return "Good morning";
  }else if (time >= 11 && time < 17) {
    return "Good afternoon";
  } else if (time >= 17 && time < 23) {
    return "Good evening";
  } else {
    return "Time must be within 24 hours";
  }

}

const triangleArea = (a,b,c) => {
  // Code here


  if (a + b <= c || a + c <= b || b + c <= a) {
      return 'Incorrect data';
     } 
      const semiPer = (a+b+c)/2;
      const areaValue = Math.sqrt(semiPer * (semiPer - a) * (semiPer - b) * (semiPer - c));
      return areaValue.toFixed(3);
}

console.log(triangleArea(2,2,3));
console.log(triangleArea(1,2,3));
console.log(triangleArea(4,2,3));
console.log(triangleArea(2,2,3));
console.log(triangleArea(1,1,3));

const filterMostOftenNumber = numsArr => {
    //Code here
    
    
    return acc;
}




const filterMostOftenNumber = (numsArr) => {
    const freqMap = numsArr.reduce((map, num) => {
      map[num] = (map[num] || 0) + 1;
      return map;
    }, {});
    
    let mostCommonNum = null;
    let highestFrequency = 0;
    
    for (const num in freqMap) {
      if (freqMap[num] > highestFrequency) {
        mostCommonNum = +num;
        highestFrequency = freqMap[num];
      }
    }
    
    const filteredNumbers = numsArr.filter((number) => number !== mostCommonNum);
    return filteredNumbers;
  };



console.log(filterMostOftenNumber([4, 5, 2, 1, 6, 5, 3, 5, 2, 5]));
console.log(filterMostOftenNumber([3, 3, 3, 3]));
console.log(filterMostOftenNumber([2, -1, 2]));
console.log(filterMostOftenNumber([1, 3, 5, 1, 8, 9, 6]));



const newArrayWithoutMostFrequent = numsArr.filter(num => num !== mostFrequentNumber);

return newArrayWithoutMostFrequent;
1 задача
function createArray(start, end) {
    let newArr = [];
        for(let i = start; i <= end; i++){ 
            newArr.push(i);
        }
    return newArr;
}
let arr = createArray(5, 20);
console.log(arr);

2 задача


function naturalNum(start, end) {
        
            for(let num = start; num <= end; num++){ 
                for (let i = 0; i < num - start + 1; i++){
                alert(num);
                }
            }    
    }
 naturalNum(3,6);


3 задача

function randArray(k) {
    const arr = [];
for (let i = 0; i <= k; i++) {
    const randomArr = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
    arr.push(randomArr);
}
    console.log(arr);
}
randArray(1000);

// 4 задача

function compact(arr){
  const uniqueValues = [];

  arr.forEach((element) => {
    if (!uniqueValues.includes(element)) {
      uniqueValues.push(element);
    }
  });
  
  return uniqueValues;
}

const arr = [5, 3, 4,4,4,4,3, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]



 5 задача



// 6 задача








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

let  arr = [5, "Limit", 12, "a", "3", 99, 2, "strong", "broun"];
console.log(filterArr(arr));
function calc(a, b, op) {
  let result = null;
  if (op===1) {
    result = (a-b);
  } else if(op===2){
    result = (a*b);
  }
  else if(op===3){
    result = (a/b);
  } else {
    result = (a+b)
  }
  return result;
}

console.log(calc(2,2,1));
// console.log(calc(2,2,2));
console.log(calc(2,2,3));
console.log(calc(2,2,7));

// 7 задача

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



function create(argument) {
  return function(value) {
    return value === argument;
  };
}

// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Створити функцію create() , яка приймає один аргумент у вигляді рядка. 
// Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї 
// аргумент збігається з аргументом зовнішньої функції.  
// (потребує використання closure)
const checkValue = create("test");
console.log(checkValue("test")); // true
console.log(checkValue("other")); // false