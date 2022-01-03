let H = prompt("Chiều cao của bạn là:");
let W = prompt("Cân nặng của bạn là:");
let height = parseFloat(H);
let weight = parseFloat(W);
document.getElementById("height").innerHTML =
  "Chiều cao của bạn là: " + height + " m";
document.getElementById("weight").innerHTML =
  "Cân nặng của bạn là: " + weight + " kg";
let bmi = weight / (height * height);
if (bmi < 16) {
  document.getElementById("bmi").innerHTML = "Bạn gầy cấp độ III";
} else if (16 <= bmi && bmi < 17) {
  document.getElementById("bmi").innerHTML = "Bạn gầy cấp độ II";
} else if (17 <= bmi && bmi < 18.5) {
  document.getElementById("bmi").innerHTML = "Bạn gầy cấp độ I";
} else if (18.5 <= bmi && bmi < 25) {
  document.getElementById("bmi").innerHTML = "Bạn bình thường";
} else if (25 <= bmi && bmi < 30) {
  document.getElementById("bmi").innerHTML = "Bạn thừa cân";
} else if (30 <= bmi && bmi < 35) {
  document.getElementById("bmi").innerHTML = "Bạn béo phì cấp độ I";
} else if (35 <= bmi && bmi < 40) {
  document.getElementById("bmi").innerHTML = "Bạn béo phì cấp độ II";
} else {
  document.getElementById("bmi").innerHTML = "Bạn béo phì cấp độ III";
}
