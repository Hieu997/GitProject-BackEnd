let a = document.getElementById("carogame");
let board = [];
let data = "";
//tạo mảng
for (i = 0; i < 5; i++) {
  board[i] = [0, 0, 0, 0, 0];
}
//in mảng
for (i = 0; i < 5; i++) {
  data += "<br/>";
  for (j = 0; j < 5; j++) {
    data += board[i][j] + "&nbsp;&nbsp;";
  }
}
a.innerHTML = data;
//xử lý nút change value
function changeValue() {
  let positionX = +prompt("Position X:");
  let positionY = +prompt("Position Y:");
  data = "";
  board[positionX][positionY] = "x";
  for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
      data += board[i][j] + "&nbsp;&nbsp;";
    }
  }
  a.innerHTML = data;
}
