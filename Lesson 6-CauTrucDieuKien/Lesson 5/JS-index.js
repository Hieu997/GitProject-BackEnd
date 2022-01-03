function showresult() {
  let text = document.getElementById("mywrite").value;
  switch (text) {
    case "Dưa Hấu":
    case "Ổi": {
      document.getElementById("price").innerHTML = "20.000 VNĐ/kg";
      document.getElementById("price").style.color = "black";
      break;
    }
    case "Xoài":
    case "Táo": {
      document.getElementById("price").innerHTML = "30.000 VNĐ/kg";
      document.getElementById("price").style.color = "black";
      break;
    }
    case "Chôm Chôm":
    case "Cam": {
      document.getElementById("price").innerHTML = "40.000 VNĐ/kg";
      document.getElementById("price").style.color = "black";
      break;
    }
    case "Măng Cụt": {
      document.getElementById("price").innerHTML = "50.000 VNĐ/kg";
      document.getElementById("price").style.color = "black";
      break;
    }
    default: {
      document.getElementById("price").innerHTML =
        "Sản phẩm không có tại của hàng";
      document.getElementById("price").style.color = "red";
    }
  }
}
