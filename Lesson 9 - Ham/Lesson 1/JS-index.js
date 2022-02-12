function selectAnswer(answer) {
  let result = "";
  if (answer) {
    result = "Đồng ý. Chúng ta hãy thư giãn 1 chút";
  } else {
    result = "Chúng ta hãy cố thêm 1 chút rồi thư giản luôn";
  }
  return result;
}

let question = confirm("Chúng ta thư giản 1 chút được không?");
let theAnswer = selectAnswer(question);
alert(theAnswer);
