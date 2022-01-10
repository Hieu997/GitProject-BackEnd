//Cách 1: For
/* let result;
result = "<table border='1' width='300' cellpadding='10'>";
for (a = 1; a <= 10; a++) {
  for (b = 1; b <= 10; b++) {
    result = result + "<td>" + a * b + "</td>";
  }
  result = "<tr>" + result + "</tr>";
}
result = result + "</table>";
document.write(result);
 */
//Cách 2: While
let a = 1;
let b = 1;
let result;
result = "<table border='1' width='300' cellpadding='10'>";
while (a <= 10) {
  while (b <= 10) {
    result = result + "<td>" + a * b + "</td>";
    b++;
  }
  result = "<tr>" + result + "</tr>";
  b = 1;
  a++;
}
result = result + "</table>";
document.write(result);
