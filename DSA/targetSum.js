const arr = [3, 2, 65, 7, 2];
arr.sort((a, b) => a - b);
const sum = 67;
function target() {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] > sum) {
      right--;
    }
    if (arr[left] + arr[right] < sum) {
      left++;
    } else {
      console.log(arr[left], arr[right]);
      return;
    }
  }
}

target();
