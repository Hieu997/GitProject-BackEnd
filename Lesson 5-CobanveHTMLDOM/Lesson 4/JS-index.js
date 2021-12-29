function test() {
  let A = document.getElementById("myNumber").value;
  let number = parseFloat(A);
  let n1 = number % 2;
  if (n1 == "0") {
    alert(" Số " + number + " là một số chẵn");
  } else {
    alert(" Số " + number + " là một số lẻ");
  }
}
