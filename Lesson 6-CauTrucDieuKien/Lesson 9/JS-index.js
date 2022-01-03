function myFuntion() {
  let money = document.getElementById("money").value;
  let amount = parseFloat(money);
  let fromCurrency = document.getElementById("fromCurrency").value;
  let toCurrency = document.getElementById("toCurrency").value;
  let result = 0;
  if (fromCurrency == "VietNam" && toCurrency == "USD") {
    result = amount / 23000;
    document.getElementById("result").innerHTML = "Result: " + result + " USD";
  } else if (fromCurrency == "USD" && toCurrency == "VietNam") {
    result = amount * 23000;
    document.getElementById("result").innerHTML = "Result: " + result + " VNĐ";
  } else if (fromCurrency == "VietNam" && toCurrency == "VietNam") {
    result = amount;
    document.getElementById("result").innerHTML = "Result: " + result + " VNĐ";
  } else {
    result = amount;
    document.getElementById("result").innerHTML = "Result: " + result + " USD";
  }
}
