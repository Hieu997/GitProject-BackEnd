//Bài 1:
for (a = 1; a <= 5; a++) {
  for (b = 1; b <= a; b++) {
    document.writeln("*");
  }
  document.writeln("</br>");
}

document.writeln("</br>");

//Bài 2:
for (i = 5; i >= 1; i--) {
  for (j = 1; j <= i; j++) {
    document.writeln("*");
  }
  document.writeln("</br>");
}

document.writeln("</br>");

//Bài 3:
for (m = 1; m <= 5; m++) {
  for (o = 5 - m; o >= 1; o--) {
    document.writeln("&nbsp;&nbsp;");
  }
  for (n = 1; n <= m; n++) {
    document.writeln("*");
  }
  document.writeln("</br>");
}

document.writeln("</br>");

//Bài 4:
for (m = 5; m >= 1; m--) {
  for (o = 5 - m; o > 0; o--) {
    document.writeln("&nbsp;&nbsp;");
  }
  for (n = 1; n <= m; n++) {
    document.writeln("*");
  }
  document.writeln("</br>");
}
