let arr = [];
let player = 1;
let gameOver = false;
let postionCurrent = [];

//Tạo bảng game
function boardGame() {
  let html = "";
  for (i = 0; i < 3; i++) {
    arr[i] = [];
    html += "<tr>";
    for (j = 0; j < 3; j++) {
      arr[i][j] = "*";
      html +=
        '<td id="cell-' +
        i +
        "-" +
        j +
        '"  onclick="play(' +
        i +
        "," +
        j +
        ')">';
      html += "</td>";
    }
    html += "</tr>";
  }
  document.getElementById("game").innerHTML = html;
}
boardGame();

//Xử lý người chơi
function play(i, j) {
  postionCurrent = [i, j];
  if (!gameOver) {
    if (arr[i][j] == "*") {
      if (player == 1) {
        document.getElementById("cell-" + i + "-" + j).innerHTML = "O";
        arr[i][j] = "0";
        checkWin();
        player = 2;
      } else {
        document.getElementById("cell-" + i + "-" + j).innerHTML = "X";
        arr[i][j] = "X";
        checkWin();
        player = 1;
      }
    } else {
      alert("Vui lòng đánh vào ô khác");
    }
  } else {
    alert("Trò chơi đã kết thúc");
  }
}

//Xử lý sự kiện người chơi
function checkWin() {
  if (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2] && arr[0][2] != "*") {
    alert("Người chơi số " + player + " chiến thắng");
    gameOver = true;
  } else if (
    arr[1][0] == arr[1][1] &&
    arr[1][1] == arr[1][2] &&
    arr[1][2] != "*"
  ) {
    alert("Người chơi số " + player + " chiến thắng");
    gameOver = true;
  } else if (
    arr[2][0] == arr[2][1] &&
    arr[2][1] == arr[2][2] &&
    arr[2][2] != "*"
  ) {
    alert("Người chơi số " + player + " chiến thắng");
    gameOver = true;
  } else if (
    arr[0][0] == arr[1][0] &&
    arr[2][0] == arr[0][0] &&
    arr[0][0] != "*"
  ) {
    alert("Người chơi số " + player + " chiến thắng");
    gameOver = true;
  } else if (
    arr[0][1] == arr[1][1] &&
    arr[2][1] == arr[0][1] &&
    arr[0][1] != "*"
  ) {
    alert("Người chơi số " + player + " chiến thắng");
    gameOver = true;
  } else if (
    arr[0][2] == arr[1][2] &&
    arr[2][2] == arr[0][2] &&
    arr[0][2] != "*"
  ) {
    alert("Người chơi số " + player + " chiến thắng");
    gameOver = true;
  } else if (
    arr[0][0] == arr[1][1] &&
    arr[2][2] == arr[0][0] &&
    arr[0][0] != "*"
  ) {
    alert("Người chơi số " + player + " chiến thắng");
    gameOver = true;
  } else if (
    arr[0][2] == arr[1][1] &&
    arr[2][0] == arr[0][2] &&
    arr[0][2] != "*"
  ) {
    alert("Người chơi số " + player + " chiến thắng");
    gameOver = true;
  }
}
