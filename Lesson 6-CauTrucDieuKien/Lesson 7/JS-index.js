function showResult() {
  let wirte = document.getElementById("mynumber").value;
  let number = parseFloat(wirte);
  /*   let n1 = (number = 1) || (number = 3);
  let n2 = (number = 2); */
  switch (number) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      document.getElementById("result").value = "31 ngày";
      break;
    }
    case 2: {
      document.getElementById("result").value = "28 hoặc 29 ngày";
      break;
    }
    case 4:
    case 6:
    case 9:
    case 11: {
      document.getElementById("result").value = "30 ngày";
      break;
    }
    default: {
      document.getElementById("result").value = "Giá trị không phù hợp";
    }
  }
}
