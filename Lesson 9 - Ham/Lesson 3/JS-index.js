let arr1 = [3, 5, 1, 8, -3, 7, 8];
let arr2 = [7, 12, 6, 9, 20, 56, 89];
let arr3 = [];
let arr4 = [0, 0, 0, 0, 0, 0];
function minArray(arr) {
  if (arr.length == 0) {
    return "Đây là mảng rỗng";
  }
  let min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let min1 = minArray(arr1);
let min2 = minArray(arr2);
let min3 = minArray(arr3);
let min4 = minArray(arr4);
document.write(
  arr1.join(", ") +
    ", số nhỏ nhất trong mảng này là: " +
    min1 +
    "<br/>" +
    "<br/>"
);
document.write(
  arr2.join(", ") +
    ", số nhỏ nhất trong mảng này là: " +
    min2 +
    "<br/>" +
    "<br/>"
);
document.write(
  arr3.join(", ") +
    ", số nhỏ nhất trong mảng này là: " +
    min3 +
    "<br/>" +
    "<br/>"
);
document.write(
  arr4.join(", ") +
    ", số nhỏ nhất trong mảng này là: " +
    min4 +
    "<br/>" +
    "<br/>"
);
