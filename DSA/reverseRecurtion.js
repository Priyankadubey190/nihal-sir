const str = "hello";

function recursion(str) {
  if (str == "") {
    return "";
  }
  return recursion(str.slice(1)) + str.charAt(0);
}

console.log(recursion(str));
