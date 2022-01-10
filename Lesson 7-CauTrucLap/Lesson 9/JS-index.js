let result;
result = "<table border='1' width='900' height='300' cellpadding='10'>";
for (a = 1; a <= 9; a++) {
  for (b = 2; b <= 9; b++) {
    result = result + "<td>" + (b + " x " + a + " = " + a * b) + "</td>";
  }
  result = "<tr>" + result + "</tr>";
}
result = result + "</table>";
document.write(result);
