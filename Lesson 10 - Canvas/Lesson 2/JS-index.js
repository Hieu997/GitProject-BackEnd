let xRect = 100;
let yRect = 100;
let wRect = 200;
let hRect = 100;
let direction = "up";
//random màu
let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");
function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  var red = getRandomHex();
  var green = getRandomHex();
  var blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}
//Tạo hình chữ nhật
function drawRect(xRect, yRect, wRect, hRect) {
  let color = getRandomColor();
  ctx.beginPath();
  ctx.rect(xRect, yRect, wRect, hRect);
  ctx.fillStyle = color;
  ctx.fill();
}
//di chuyển hình chữ nhật
function autoMoveRect() {
  ctx.clearRect(0, 0, 500, 500);
  drawRect();
  if (yRect + hRect >= 500) {
    direction = "up";
  } else if (yRect + hRect == hRect) {
    direction = "down";
  }
  switch (direction) {
    case "up":
      yRect -= 5;
      break;
    case "down":
      yRect += 5;
      break;
  }
  drawRect(xRect, yRect, wRect, hRect);
}
setInterval(autoMoveRect, 50);
