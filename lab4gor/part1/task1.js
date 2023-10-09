// Найти максимальную разницу между элементами массива.
function maxDifference(arr) {
  let min = arr[0];
  let maxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] - min > maxDiff) {
      maxDiff = arr[i] - min;
    }
  }
  return maxDiff;
}

// Вернуть массив без повторяющихся элементов.
function uniqueElements(arr) {
  return [...new Set(arr)];
}

// Дан массив объектов, вернуть только те, у которых isDone: true.
function filterDone(tasks) {
  return tasks.filter(task => task.isDone);
}

console.log(maxDifference([1, 2, 3, 4, 5, 6])); 
console.log(uniqueElements([1, 2, 2, 3, 3, 4, 4, 5])); 
console.log(filterDone([{id: 1, isDone: true}, {id: 2, isDone: false}, {id: 3, isDone: true}]));
