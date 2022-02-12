function showResult() {
  let input = document.getElementById("input").value;
  let number = parseFloat(input);
  let flag = true;
  if (number < 2) {
    flag = false;
  } else if (number == 2) {
    flag = true;
  } else if (number % 2 == 0) {
    flag = false;
  } else {
    for (i = 3; i < number - 1; i++) {
      if (number % i == 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag == true) {
    alert("Đây là số nguyên tố");
  } else {
    alert("Đây không phải là số nguyên tố");
  }
}
