let numbers = [-3, 5, 1, 3, 2, 10];

//Cách 1:
let nums = numbers.reverse();
document.write(nums);

//Cách 2:
/* let first = 0;
let last = numbers.length - 1;
while (first < last) {
  let b = numbers[first];
  numbers[first] = numbers[last];
  numbers[last] = b;
  first++;
  last--;
}
document.write(numbers); */
