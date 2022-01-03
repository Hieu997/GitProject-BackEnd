document.getElementById("tank").style["top"] = 19 + "px";
document.getElementById("tank").style["left"] = 19 + "px";
function up() {
  //Lấy giá trị về
  let a = document.getElementById("tank").style.top;
  //Chuyển giá trị tra dạng số
  let up = parseInt(a);
  //khai báo giá trị mới cho top bằng cách click
  console.log(up - 19);
  tank.style.top = up - 19 + "px";
  //phải khai báo if chung với lệnh funtion để lúc di chuyển có thể kiểm tra từng bước
  if (
    document.getElementById("tank").style.top == 95 + "px" &&
    document.getElementById("tank").style.left == 133 + "px"
  ) {
    document.getElementById("boom").style.backgroundImage =
      'Url("explosion.png")';
  }
}
function left() {
  let a = document.getElementById("tank").style.left;
  let up = parseInt(a);
  console.log(up - 19);
  tank.style.left = up - 19 + "px";
  if (
    document.getElementById("tank").style.top == 95 + "px" &&
    document.getElementById("tank").style.left == 133 + "px"
  ) {
    document.getElementById("boom").style.backgroundImage =
      'Url("explosion.png")';
  }
}
function right() {
  let a = document.getElementById("tank").style.left;
  let up = parseInt(a);
  console.log(up + 19);
  tank.style.left = up + 19 + "px";
  if (
    document.getElementById("tank").style.top == 95 + "px" &&
    document.getElementById("tank").style.left == 133 + "px"
  ) {
    document.getElementById("boom").style.backgroundImage =
      'Url("explosion.png")';
  }
}
function down() {
  let a = document.getElementById("tank").style.top;
  let up = parseInt(a);
  console.log(up + 19);
  tank.style.top = up + 19 + "px";
  if (
    document.getElementById("tank").style.top == 95 + "px" &&
    document.getElementById("tank").style.left == 133 + "px"
  ) {
    document.getElementById("boom").style.backgroundImage =
      'Url("explosion.png")';
  }
}
