class Remote {
  constructor(remoteCode) {
    this.remoteCode = remoteCode;
  }
  volumeOnRemtoe(Television, number) {
    if (Television.getCode() === this.remoteCode) {
      Television.adjustVol(number);
    }
  }
  progarmOnRemote(Television, number) {
    if (Television.getCode() === this.remoteCode) {
      Television.adjustProgram(number);
    }
  }
  turnOnOff(Television) {
    if (Television.getCode() === this.remoteCode) {
      Television.turnTelevision();
    }
  }
}
