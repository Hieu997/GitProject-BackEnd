let a = 1;
let b = 1;
let c;
let number = parseInt(prompt("Hãy nhập số thích hợp:"));
for (i = 1; i <= number; i++) {
  document.write(a + ", ");
  c = a + b;
  a = b;
  b = c;
}
