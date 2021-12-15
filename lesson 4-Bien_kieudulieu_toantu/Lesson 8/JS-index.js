let yourname = prompt("Hãy nhập tên người nhận: ");
let address = prompt("Hãy nhập địa điểm: ");
let dd = prompt("Hãy nhập ngày: ");
let mm = prompt("Hãy nhập tháng: ");
let yyyy = prompt("Hãy nhập năm: ");
let day = parseInt(dd);
let month = parseInt(mm);
let year = parseInt(yyyy);
document.getElementById("title").innerHTML = yourname + " thương nhớ,";
document.getElementById("datetime").innerHTML =
  address + ", ngày " + day + " tháng " + month + " năm " + year;
