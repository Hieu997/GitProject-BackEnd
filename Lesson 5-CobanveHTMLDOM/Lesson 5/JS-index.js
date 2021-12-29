let year = parseInt(prompt("Enter a year:"));
if (year % 4 == "0" && year % 100 != "0") {
  alert("Năm " + year + " là năm nhuận");
} else if (year % 100 == "0" && year % 400 != "0") {
  alert("Năm " + year + " không phải là năm nhuận");
} else if (year % 100 == "0" && year % 400 == "0") {
  alert("Năm " + year + " là năm nhuận");
} else {
  alert("Năm " + year + " không phải là năm nhuận");
}
