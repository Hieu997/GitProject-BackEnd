function result() {
  let n1 = document.getElementById("math").value;
  let n2 = document.getElementById("literality").value;
  let n3 = document.getElementById("english").value;
  let math = parseFloat(n1);
  let literality = parseFloat(n2);
  let english = parseFloat(n3);
  let area = document.getElementById("area").value;
  let total1 = math + literality + english + 0.75;
  let total2 = math + literality + english + 0.25;
  let total3 = math + literality + english + 0.5;
  let total4 = math + literality + english;
  switch (area) {
    case "KV1": {
      document.getElementById("resultWirte").innerHTML =
        "Tổng điểm ĐH khối D của bạn là: " + total1;
      break;
    }
    case "KV2": {
      document.getElementById("resultWirte").innerHTML =
        "Tổng điểm ĐH khối D của bạn là: " + total2;
      break;
    }
    case "KV2-NT": {
      document.getElementById("resultWirte").innerHTML =
        "Tổng điểm ĐH khối D của bạn là: " + total3;
      break;
    }
    case "KV3": {
      document.getElementById("resultWirte").innerHTML =
        "Tổng điểm ĐH khối D của bạn là: " + total4;
      break;
    }
  }
}
