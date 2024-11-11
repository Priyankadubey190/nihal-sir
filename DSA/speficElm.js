const arr = [4, 34, 43, 41, 12321, 7, 99];

const elm = 99;

function output() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elm) {
      return true;
    }
  }
  return false;
}
console.log(output());
