//Tìm giá trị nhỏ nhất
function findMin(arr) {
  let min = arr[0][0];
  for (j = 0; j < arr.length; j++) {
    for (i = 0; i <= j; i++) {
      if (arr[j][i] < min) {
        min = arr[j][i];
      }
    }
  }
  return min;
}
//Tìm giá trị lớn nhất
function findMax(arr) {
  let max = arr[0][0];
  for (j = 0; j < arr.length; j++) {
    for (i = 0; i <= j; i++) {
      if (arr[j][i] > max) {
        max = arr[j][i];
      }
    }
  }
  return max;
}
//biểu diễn giá trị
let numbers = [];
for (j = 0; j < 10; j++) {
  numbers[j] = [];
  for (i = 0; i < 10; i++) {
    numbers[j][i] = Math.floor(Math.random() * 101);
    document.writeln(numbers[j][i] + "&nbsp;&nbsp ");
  }
  document.write(" <br/> ");
}
//Hiẻn thị kết quả
let minValue = findMin(numbers);
let maxValue = findMax(numbers);
document.write("<br/>");
document.write("The minimum value is: " + minValue);
document.write("<br/>");
document.write("The minimum value is: " + maxValue);
