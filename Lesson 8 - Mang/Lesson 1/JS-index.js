let x = 0;
let newWrite = [];
function add() {
  newWrite[x] = document.getElementById("write").value;
  alert("Giá trị " + newWrite[x] + " bạn đã được lưu");
  x++;
  //Sau khi lưu giá trị sẽ trả về rỗng
  document.getElementById("write").value = "";
}
function display() {
  let e = "<hr/>";
  for (let i = 0; i < newWrite.length; i++) {
    e += "Element " + i + " = " + newWrite[i] + "<br/>";
  }
  document.getElementById("result").innerHTML = e;
}
