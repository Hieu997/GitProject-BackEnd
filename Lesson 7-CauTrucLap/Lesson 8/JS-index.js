let number = parseInt(prompt("Hãy nhập dãy số có 5 chữ số:"));
let a,
  b,
  c,
  d,
  e,
  resultOne,
  resultTwo,
  resultThree,
  resultFour,
  resultFive,
  endOne,
  endTwo,
  endThree,
  endFour,
  endFive;
for (i = 1; i <= 1; i++) {
  a = number % 10;
  resultOne = 0 * 10 + a;
  endOne = parseInt(number / 10);
  console.log(a);
  for (j = 1; j <= 1; j++) {
    b = endOne % 10;
    resultTwo = resultOne * 10 + b;
    endTwo = parseInt(endOne / 10);
    console.log(b);
  }
  for (k = 1; k <= 1; k++) {
    c = endTwo % 10;
    resultThree = resultTwo * 10 + c;
    endThree = parseInt(endTwo / 10);
    console.log(c);
  }
  for (h = 1; h <= 1; h++) {
    d = endThree % 10;
    resultFour = resultThree * 10 + d;
    endFour = parseInt(endThree / 10);
    console.log(d);
  }
  for (l = 1; l <= 1; l++) {
    e = endFour % 10;
    resultFive = resultFour * 10 + c;
    endFive = parseInt(endFour / 10);
    console.log(e);
  }
}
document.write("Số đảo ngược là " + a + "" + b + "" + c + "" + d + "" + e);
