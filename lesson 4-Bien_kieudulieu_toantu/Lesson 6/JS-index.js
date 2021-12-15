let bankinh = prompt("Hãy nhập bán kính hình tròn của bạn:");
let R = parseInt(bankinh);
let C = 2 * R * 3.14;
let S = R * R * 3.14;
document.write(" Bán kính của bạn: R = " + R);
document.write("<br/>");
document.write("Chu vi hình tròn là: C = 2 x R x π = " + C);
document.write("<br/>");
document.write("Diện tích hình tròn là: S = R^2 x π = " + S);
