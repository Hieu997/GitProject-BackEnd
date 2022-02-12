class Television {
  constructor(remotecode) {
    this.remotecode = remotecode;
    this.tvprogram = 1;
    this.isOn = false;
    this.volume = 20;
  }
  getCode() {
    return this.remotecode;
  }
  checkIsOn() {
    if (this.isOn) {
      alert("TV đang được bật");
    } else {
      alert("TV đang được tắt");
    }
  }
  turnTelevision() {
    if (this.isOn) {
      this.isOn = false;
      alert("TV đang được tắt");
    } else {
      this.isOn = true;
      alert("TV đang được bật");
    }
  }
  adjustVol(number) {
    if (this.isOn) {
      this.volume += number;
      alert("Volume hiện tại là: " + this.volume);
    } else {
      alert("TV đang được tắt");
    }
  }
  adjustProgram(number) {
    if (this.isOn) {
      this.tvprogram = number;
      alert("Đang chuyển sang kênh: " + number);
    } else {
      alert("TV đang được tắt");
    }
  }
}
