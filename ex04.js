let userInput = prompt("Nhập vào dãy số, cách nhau bằng dấu phẩy(,)");
let arr = userInput.split(",").map(Number);
let maxNumber = Math.max(...arr);
alert("Giá trị lớn nhất là: " + maxNumber);