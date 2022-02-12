class Cat {
  constructor(name, wight, speed, noise) {
    this.name = name;
    this.wight = wight;
    this.speed = speed;
    this.noise = true;
  }
  voice() {
    this.noise = true;
    return "Meo - Meo";
  }
  catch(Rat) {
    return this.speed > Rat.speed;
  }
  eat(Rat) {
    if (Rat.status == true) {
      this.wight += Rat.wight;
      Rat.status = false;
    }
    return this.wight;
  }
}
