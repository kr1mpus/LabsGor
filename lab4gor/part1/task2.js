// Найти элементы массива, которые больше указанного числа:
function filterGreaterThan(arr, num) {
return arr.filter(el => el > num);
}

// Дан многомерный массив произвольной вложенности. Написать функцию, делающую из него "плоский" массив:
function flatten(arr) {
return arr.flat(Infinity);
}

console.log(filterGreaterThan([1, 4, 6, 3, 2], 2));
console.log(flatten([1, 4, [34, 1, 20], [6, [6, 12, 8], 6]]));
