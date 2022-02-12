class Temperature {
  constructor(c) {
    this.c = c;
  }
  getK() {
    return this.c + 273;
  }
  getF() {
    return this.c * 1.8 + 32;
  }
}
