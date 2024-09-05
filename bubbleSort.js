const arr = [10,11,10,10,1,10,-1,9,34,2,1,62,4,5,7,8,3,4,4,1,2,0,1,4,6, -100];
let count = 0;
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      count += 1;
      if(arr[j] < arr[i]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
      if(arr[j] === arr[i]) {
        continue;
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))
console.log(arr.length)
console.log(count)
