// Реализовать генератор, бесконечно возвращающий случайное число в заданном диапазоне random(n, m).
function* randomGenerator(n, m) {
    while (true) {
      yield Math.floor(Math.random() * (m - n + 1)) + n;
    }
  }
  
const randomGen = randomGenerator(1 ,10);


// Реализовать генератор, бесконечно возвращающий очередное число из последовательности Падована.
function* padovanSequence() {
  let p = [1, 1, 1];
  
  yield* p;
  
  while (true) {
    p.push(p[p.length - p[p.length - 2]] + p[p.length - p[p.length - 3]]);
    yield p[p.length - 1];
  }
}

const padovanGen = padovanSequence();
// Реализовать генератор, бесконечно возвращающий очередное простое число.
function* primeGenerator() {
  function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++)
      if(num % i === 0) return false; 
    return num > 1;
  }

  let num = 2;

  while(true){
    if(isPrime(num)){
      yield num;
    }
    num++;
  }
}

const primeGen = primeGenerator();

// Посчитать число вхождений букв (или слов) в строке, используя Map.
function countOccurrences(str) {
  const words = str.split(' ');
  const map = new Map();

  words.forEach(word => map.set(word, (map.get(word) || 0) +1));

  return map;
}

// Написать функцию getPrime(n), возвращающую n-ное по счёту простое число, используя BigInt.
function getPrime(n) {
  function isPrime(num) {
    for(let i = 2n; i <= num / 2n; i++)
      if(num % i === 0n) return false;
    return num > 1;
  }

  let count = 0;
  let num = 2n;

  while(count < n){
    if(isPrime(num)){
      count++;
      if(count === n) return num;
    }
    num++;
  }
}

console.log(randomGen.next().value);
console.log(padovanGen.next().value);
console.log(primeGen.next().value); // Выводит первое простое число
console.log(countOccurrences("Hello world!")); // Выводит Map с количеством вхождений каждого слова в строке
console.log(getPrime(10)); // Выводит десятое простое число