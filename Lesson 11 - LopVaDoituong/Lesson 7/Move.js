class Move {
  constructor(image, xRect, yRect, wRect, hRect) {
    this.image = image;
    this.xRect = xRect;
    this.yRect = yRect;
    this.wRect = wRect;
    this.hRect = hRect;
    this.flag = "left";
    this.canvas = document.getElementById("my-canvas");
  }
  getImage() {
    return (
      "<img src='" +
      this.image +
      " ' " +
      " width='" +
      this.wRect +
      " ' " +
      " height='" +
      this.hRect +
      " ' " +
      " style='top: " +
      this.xRect +
      "px; left: " +
      this.yRect +
      "px; position: absolute;'>"
    );
  }
  getMoveImage() {
    //this.yRect++;
    this.getImage();
    if (this.yRect + this.wRect >= this.canvas.width) {
      this.flag = "left";
    } else if (this.yRect + this.wRect == this.wRect) {
      this.flag = "right";
    }
    switch (this.flag) {
      case "left":
        this.yRect -= 5;
        break;
      case "right":
        this.yRect += 5;
        break;
    }
  }
}
/*
let xRect = 100;
let yRect = 100;
let wRect = 200;
let hRect = 100;
let direction = "up";
//random màu
let canvas = document.getElementById("my-canvas");
let ctx = canvas.getContext("2d");
//Tạo hình chữ nhật
function drawRect(xRect, yRect, wRect, hRect) {
  ctx.beginPath();
  ctx.rect(xRect, yRect, wRect, hRect);
  ctx.fillStyle = "Lamboghini.png";
  ctx.fill();
}
//di chuyển hình chữ nhật
function autoMoveRect() {
  ctx.clearRect(0, 0, 1000, 800);
  drawRect();
  if (xRect + wRect >= 1000) {
    direction = "up";
  } else if (xRect + wRect == wRect) {
    direction = "down";
  }
  switch (direction) {
    case "up":
      xRect -= 5;
      break;
    case "down":
      xRect += 5;
      break;
  }
  drawRect(xRect, yRect, wRect, hRect);
}
setInterval(autoMoveRect, 50); */
