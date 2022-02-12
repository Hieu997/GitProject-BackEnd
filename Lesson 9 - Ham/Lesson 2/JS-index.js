function search() {
  let n = document.getElementById("input").value;
  let result = (n - 32) / 1.8;
  document.getElementById("result").innerText = result;
}
