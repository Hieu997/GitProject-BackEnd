let value = prompt("Hãy nhập 1 con số bạn muốn tìm kiếm:");
let numbers = [-3, 5, 1, 3, 2, 10];
for (i = 0; i < numbers.length; i++) {
  if (value == numbers[i]) {
    alert("Số " + value + " bạn đang tìm kiếm có trong mảng");
    break;
  }
}
