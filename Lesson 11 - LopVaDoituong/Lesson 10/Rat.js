class Rat {
  constructor(name, wight, speed, status, noise) {
    this.name = name;
    this.wight = wight;
    this.speed = speed;
    this.status = true;
    this.noise = true;
  }
  voice() {
    this.noise = true;
    return "Chit - Chit";
  }
}
