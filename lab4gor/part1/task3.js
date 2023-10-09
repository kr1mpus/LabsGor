// Найти, сколько есть в массиве пар чисел, дающих в сумме 0:
function countZeroSumPairs(arr) {
    let count = 0;
    let map = new Map();
    
    for (let num of arr) {
      if (map.has(-num)) {
        count += map.get(-num);
      }
      
      map.set(num, (map.get(num) || 0) + 1);
    }
    
    return count;
  }
  
  // То же самое, но найти количество троек таких чисел.
  function countZeroSumTriplets(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length - 2; i++) {
      let set = new Set();
      
      for (let j = i + 1; j < arr.length; j++) {
        if (set.has(-arr[i] - arr[j])) {
          count++;
        } else {
          set.add(arr[j]);
        }
      }
    }
    
    return count;
  }

  console.log(countZeroSumPairs([-7,12 ,4 ,6 ,-4 ,-12 ,0]));
  console.log(countZeroSumPairs([-1, 2, 4, 7, -4, 1, -2]));
  console.log(countZeroSumTriplets([-7 ,12 ,4 ,6 ,-4 ,-12 ,0]));
  console.log(countZeroSumTriplets([-1, 2, 4, 7, -4, 1, -2]));
