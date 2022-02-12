let television = new Television(1020);
let remote = new Remote(1020);
//television.turnTelevision();
remote.turnOnOff(television);
remote.volumeOnRemtoe(television, 5);
remote.progarmOnRemote(television, 3);
remote.turnOnOff(television);
