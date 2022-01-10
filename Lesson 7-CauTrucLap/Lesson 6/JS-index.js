function showBox() {
  for (i = 1; i < 4; i++) {
    let box = parseInt(prompt("Hãy nhập con số thích hợp từ 1 => 10:"));
    if (box == 2) {
      alert("Chúc mừng bạn đã lựa chọn kết quả chính xác");
      break;
    }
  }
}
