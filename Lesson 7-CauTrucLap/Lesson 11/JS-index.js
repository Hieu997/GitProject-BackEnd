function result() {
  let first = document.getElementById("first").value;
  let second = document.getElementById("second").value;
  let firstNumber = parseInt(first);
  let secondNumber = parseInt(second);
  let result = 0;
  if (firstNumber > secondNumber) {
    alert("Bạn hãy nhập lại giá trị thứ 1 nhỏ hơn giá trị thứ 2");
  } else {
    let i = firstNumber;
    while (i <= secondNumber) {
      result += i;
      document.getElementById("writeResult").innerHTML =
        "Giá trị của bạn là: " + result;
      i++;
    }
  }
}
