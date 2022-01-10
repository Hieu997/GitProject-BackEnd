// số nguyên tố là số chia hết cho chính nó và 1
let n = +prompt("Hãy nhập số lượng cần in ra:");
let num = 2;
let satus = 1;
for (i = 2; i <= n; ) {
  for (j = 2; j <= Math.sqrt(num); j++) {
    if (num % j == 0) {
      satus = 0;
      break;
    }
  }
  if (satus != 0) {
    document.write(num + " - ");
    i++;
  }
  satus = 1;
  num++;
}
