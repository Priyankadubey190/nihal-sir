let num = 11;

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function prime() {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

prime();

// let num = 11;

// function isPrime(n) {
//   if (n <= 1) return false; // 0 and 1 are not prime numbers
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     // Loop only up to √n
//     if (n % i === 0) {
//       return false; // n is divisible by i, so it’s not prime
//     }
//   }
//   return true; // n is prime if no divisors were found
// }

// function prime() {
//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       console.log(i); // Print prime number
//     }
//   }
// }

// prime();
