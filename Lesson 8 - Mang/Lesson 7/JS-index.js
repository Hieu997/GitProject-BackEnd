function myClick() {
  let myWord = document.getElementById("word").value;
  let dictionary = ["hello", "boy", "girl", "one", "two"];
  let a = dictionary.indexOf(myWord);
  //console.log(a);
  for (i = 0; i < dictionary.length; i++) {
    if (a == 0) {
      document.getElementById("result").innerHTML =
        dictionary[0] + " => Xin chào";
    } else if (a == 1) {
      document.getElementById("result").innerHTML =
        dictionary[1] + " => Con trai";
    } else if (a == 2) {
      document.getElementById("result").innerHTML =
        dictionary[2] + " => Con gái";
    } else if (a == 3) {
      document.getElementById("result").innerHTML =
        dictionary[3] + " => Số một";
    } else if (a == 4) {
      document.getElementById("result").innerHTML =
        dictionary[4] + " => Số hai";
    } else {
      document.getElementById("result").innerHTML = "";
      alert("Từ vựng không có trong từ điển");
      break;
    }
  }
}
