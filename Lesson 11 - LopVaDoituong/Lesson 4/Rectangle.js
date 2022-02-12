class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  getColor() {
    return this.color;
  }
  getAcreage() {
    return this.width * this.height;
  }
  getPerimeter() {
    return (this.width + this.height) * 2;
  }
}
