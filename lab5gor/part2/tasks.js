// 1. Посчитать максимум и минимум массива:
const arr1 = [1, 6, -1, 22, 13];
const max = Math.max(...arr1); // 22
const min = Math.min(...arr1); // -1

// 2. Перевернуть строку задом наперёд:
const str = "!тевирП";
const reversedStr = str.split('').reverse().join(''); // "Привет!"

// 2.1. Перевернуть введенную пользователем строку задом наперед:
function reverseUserInput(userInput) {
  return userInput.split('').reverse().join('');
}

// 3. Вычислить сумму квадратных корней для всех чётных чисел целочисленного массива:
const arr3 = [3, 5, 8, 13, 21, 42];
const sumOfSquareRoots = arr3.filter(num => num % 2 === 0).map(Math.sqrt).reduce((a, b) => a + b, 0);

// 4. Написать функцию, которая проверяет, являются ли две строки анаграммой:
function anagram(str1, str2) {
  const normalize = str =>
    str.toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

// 5. Написать функцию, которая проверяет, является ли строка палиндромом:
function palindrome(str) {
  const normalizedStr = str.toLowerCase().replace(/[\W_]/g, '');
  const reversedStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reversedStr;
}

// 6. Написать функцию, которая после вызова каждую секунду пишет в консоль очередное число Фибоначчи:
function printFibonacciNumbers() {
  let a = 0;
  let b = 1;
  console.log(a);
  
  setInterval(() => {
    console.log(b);
    [a, b] = [b, a + b];
  }, 1000);
}

// 7. Написать функцию delay(N), возвращающую промис, который сделает resolve() через N секунд:
function delay(N) {
  return new Promise(resolve => setTimeout(resolve, N * 1000));
}

// 8. Написать функцию intersect(arrA, arrB), принимающую на вход два массива и возвращающую пересечение значений этих массивов:
function intersect(arrA, arrB) {
  return arrA.filter(value => arrB.includes(value));
}

//9. Написать HTML и JS-код, который рисует кнопки "+" и "-" и значение, уменьшающееся или увеличивающееся при нажатии.
//HTML:
/*
<button id="decrement">-</button>
<span id="value">0</span>
<button id="increment">+</button>
*/
//JS:
let value = document.getElementById('value');
let incrementButton = document.getElementById('increment');
let decrementButton = document.getElementById('decrement');

incrementButton.onclick = () => value.textContent++;
decrementButton.onclick = () => value.textContent--;

//10. Что выведет этот код? Как сделать так, чтобы он вывел `1`, `2`, `3`?

let i;
for(i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
} //Изначальный код


for(let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
} //Исправленный код

