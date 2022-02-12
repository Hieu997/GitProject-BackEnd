function Human(name, gender, weight) {
  this.name = name;
  this.gender = gender;
  this.weight = weight;

  this.getWeight = function () {
    console.log(`${this.name} Weight: ${this.weight}`);
    return this.weight;
  };
  this.setWeight = function (wet) {
    this.weight = wet;
  };
  this.eat = function (Apple) {
    apple.decrease();
  };
  this.say = function (string) {
    document.getElementById(
      "say"
    ).innerHTML += `${this.name} say: "${string}" <br>`;
  };
  this.checkApple = function (Apple) {
    return Apple.getWeight();
  };
}
