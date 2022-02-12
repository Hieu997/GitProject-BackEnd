let battery = new Battery();
battery.setEnergy(10);
let flashlamp = new FlashLamp();
flashlamp.setBattery(battery);
document.write("Battery info: " + flashlamp.getBatteryIfo() + "<br/>");

document.write("Turn on<br/>");
flashlamp.turnOn();
flashlamp.light();
document.write("Battery info: " + battery.decreaseEnergy() + "<br/>");

document.write("Turn off<br/>");
flashlamp.turnOff();
flashlamp.light();
document.write("Battery info: " + battery.decreaseEnergy() + "<br/>");

document.write("Turn on<br/>");
flashlamp.turnOn();
flashlamp.light();
document.write("Battery info: " + battery.decreaseEnergy() + "<br/>");
