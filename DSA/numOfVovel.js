const vowel = "aeiouAEIOU";

const str = "Umbrella";
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (vowel.includes(str[i])) {
    count++;
  }
}

console.log(count);
