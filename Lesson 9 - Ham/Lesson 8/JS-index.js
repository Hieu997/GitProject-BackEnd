let x = 0;
var newarr = [];
function showResult() {
  newarr[x] = document.getElementById("input").value;
  x++;
  //Sau khi lưu giá trị sẽ trả về rỗng
  document.getElementById("input").value = "";
  show();
}
//Hiển thị giá trị

function show() {
  let e = "";
  for (let i = 0; i < newarr.length; i++) {
    e += i + 1 + ". " + newarr[i] + "&nbsp;&nbsp;";
    e +=
      "<button type='button' onclick='editValue(" +
      i +
      ")'>Edit</button>" +
      "&nbsp;&nbsp;";
    e +=
      "<button type='button' onclick='deleteValue(" + i + ")'>Delete</button>";
    e += "<br/>" + "<br/>";
  }
  document.getElementById("result").innerHTML = e;
}

//delete giá trị
function deleteValue(index) {
  if (confirm("Are you sure?")) {
    newarr.splice(index, 1);
    show();
  }
}

function editValue(index) {
  let newvalue = prompt("Giá trị cần sửa là:");
  newarr[index] = newvalue;
  show();
}
