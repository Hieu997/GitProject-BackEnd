let move = new Move("Lamboghini.png", 100, 500, 200, 200);
function play() {
  move.getMoveImage();
  document.getElementById("game").innerHTML = move.getImage();
}
setInterval(play, 30);
