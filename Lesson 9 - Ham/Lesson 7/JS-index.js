let chuoi = prompt("Hãy nhập giá trị của bạn:");
function isPalindrome(str) {
  let arr = str.split("");

  let firstCharacter = arr[0];
  let lastCharactor = arr[arr.length - 1];

  if (firstCharacter === lastCharactor) {
    arr.shift();
    arr.pop();
    if (arr.length === 0 || arr.length === 1) {
      return true;
    } else {
      let newStr = arr.join("");
      return isPalindrome(newStr);
    }
  }
  return false;
}
alert(isPalindrome(chuoi));
