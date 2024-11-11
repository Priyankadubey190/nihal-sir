const arr = [8, 33, 554, 234, 8, 67, 6767, 677];

function maxFind() {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxFind());
