const arr = [-1,3,1,20,1,4,5,1,8,0,12,3];

const quickSort = (array) => {
  if(array.length <= 1) {
    return array;
  };

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if(i === pivotIndex) 
      continue;
    if(array[i] < pivot) {
      less.push(array[i])
    } else {
      greater.push(array[i])
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr));
