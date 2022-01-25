//Bài 1: Vẽ 1 hình tròn cố định kích thước
/* function drawCricle() {
  let canvas = document.getElementById("my-canvas");
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(500, 500, 80, 0, 2 * Math.PI);
  ctx.fill();
}
drawCricle(); */

//Bài 2: Vẽ 1 hình tròn với bán kính ngẫu nhiên
/* function drawCricle() {
  let canvas = document.getElementById("my-canvas");
  let ctx = canvas.getContext("2d");
  let radius = Math.floor(Math.random() * 80);
  ctx.beginPath();
  ctx.arc(500, 500, radius, 0, 2 * Math.PI);
  ctx.fill();
}
drawCricle(); */

//Bài 3: Vẽ 1 hình tròn với màu ngãy nhiên
/* function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  var red = getRandomHex();
  var green = getRandomHex();
  var blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}
function drawCricle() {
  let canvas = document.getElementById("my-canvas");
  let ctx = canvas.getContext("2d");
  let radius = Math.floor(Math.random() * 80);
  let color = getRandomColor();
  ctx.beginPath();
  ctx.arc(500, 500, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
drawCricle(); */

//Bài 4: Vẽ 1 hình tròn với vị trí ngãy nhiên
/* function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  var red = getRandomHex();
  var green = getRandomHex();
  var blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}
function drawCricle() {
  let canvas = document.getElementById("my-canvas");
  let ctx = canvas.getContext("2d");
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let radius = Math.floor(Math.random() * 80);
  let color = getRandomColor();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
drawCricle(); */

//Bài 5: Vẽ 2 hình tròn với vị trí ngãy nhiên
/* function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  var red = getRandomHex();
  var green = getRandomHex();
  var blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}
function drawCricle() {
  let canvas = document.getElementById("my-canvas");
  let ctx = canvas.getContext("2d");
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let radius = Math.floor(Math.random() * 80);
  let color = getRandomColor();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
drawCricle();
drawCricle(); */

//Bài 6: Vẽ nhiều hình tròn với vị trí ngãy nhiên
function getRandomHex() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  var red = getRandomHex();
  var green = getRandomHex();
  var blue = getRandomHex();
  return "rgb(" + red + "," + blue + "," + green + ")";
}
function drawCricle() {
  let canvas = document.getElementById("my-canvas");
  let ctx = canvas.getContext("2d");
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let radius = Math.floor(Math.random() * 80);
  let color = getRandomColor();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
for (i = 0; i < 30; i++) {
  drawCricle();
}
