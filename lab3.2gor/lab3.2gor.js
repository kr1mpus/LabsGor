//        Задача 1
// Вернуть число в обратном порядке
function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
  }
  
  // Вернуть число без повторяющихся цифр
  function removeDuplicates(number) {
    const digits = number.toString().split('');
    const uniqueDigits = Array.from(new Set(digits));
    return parseInt(uniqueDigits.join(''));
  }
  
  // Посчитать, сколько раз в данном числе встречается данная цифра
  function countDigitOccurrences(number, digit) {
    const digitString = digit.toString();
    const numberString = number.toString();
    let count = 0;
    for (const char of numberString) {
      if (char === digitString) {
        count++;
      }
    }
    return count;
  }
  
  // Посчитать самую длинную последовательность
  function longestBinarySequence(number, binaryDigit) {
    const binaryString = number.toString(2);
    const targetNumber = binaryDigit.toString();

    let maxLength = 0;
    let currentLength = 0;

    for (let i = 0; i < binaryString.length; i++) {
      if (binaryString[i] === targetNumber) {
        currentLength++;
        maxLength = Math.max(maxLength, currentLength);
      } else {
        currentLength = 0;
      }
    }
    return maxLength;
  }
  
  //        Задача 2
  // Найти самый первый неповторяющийся символ в строке
  function firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return str[i];
      }
    }
    return null;
  }
  
  // Сгенерировать строку заданной длины из случайных символов
  function generateRandomString(StrLength) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < StrLength; i++) {
      const randomIndex = Math.floor(Math.random() * (characters.length - 1));
      result += characters[randomIndex];
    }
    return result;
  }
  
  // Вернуть только уникальные символы строки
  function uniqueCharacters(str) {
    const uniqueChars = Array.from(new Set(str.split('')));
    return uniqueChars.join('');
  }
  
  
  console.log(reverseNumber(123));
  console.log(removeDuplicates(111333456));
  console.log(countDigitOccurrences(1355567, 5));
  console.log(longestBinarySequence(1010011000100, 0));
  console.log(firstNonRepeatingCharacter('фывфавыапрс'));
  console.log(generateRandomString(5));
  console.log(uniqueCharacters('позволяеткопироватьтекстиз'));
