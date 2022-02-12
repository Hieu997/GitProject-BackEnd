function result() {
  let input = document.getElementById("input").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let kq = "";
  if (from == "meters" && to == "feet") {
    kq = input / 0.305;
  } else if (to == "meters" && from == "feet") {
    kq = 0.305 * input;
  } else {
    kq = input;
  }
  document.getElementById("write_result").innerText = kq;
}
