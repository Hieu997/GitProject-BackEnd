class FlashLamp {
  constructor() {}
  setBattery(battery) {
    this.battery = battery;
  }
  getBatteryIfo() {
    return this.battery.getEnergy();
  }
  light() {
    if (this.status) {
      alert("Đèn đã bật");
    } else {
      alert("Đền đã tắt");
    }
  }
  turnOn() {
    this.status = true;
  }
  turnOff() {
    this.status = false;
  }
}
