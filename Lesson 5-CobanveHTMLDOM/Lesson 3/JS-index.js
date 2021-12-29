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
}
function left() {
  //Lấy giá trị về
  let a = document.getElementById("tank").style.left;
  //Chuyển giá trị tra dạng số
  let up = parseInt(a);
  //khai báo giá trị mới cho top bằng cách click
  console.log(up - 19);
  tank.style.left = up - 19 + "px";
}
function right() {
  //Lấy giá trị về
  let a = document.getElementById("tank").style.left;
  //Chuyển giá trị tra dạng số
  let up = parseInt(a);
  //khai báo giá trị mới cho top bằng cách click
  console.log(up + 19);
  tank.style.left = up + 19 + "px";
}
function down() {
  //Lấy giá trị về
  let a = document.getElementById("tank").style.top;
  //Chuyển giá trị tra dạng số
  let up = parseInt(a);
  //khai báo giá trị mới cho top bằng cách click
  console.log(up + 19);
  tank.style.top = up + 19 + "px";
}
