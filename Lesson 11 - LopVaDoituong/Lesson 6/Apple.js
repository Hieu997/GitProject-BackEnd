function Apple(weight = 10) {
  this.weight = weight;

  this.isEmpty = false;
  this.decrease = function () {
    this.weight--;
  };
  this.getWeight = function () {
    console.log(`Apple weight: ${this.weight}`);
    return this.weight;
  };
}
