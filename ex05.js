let userInput = prompt("Nhập dãy số, cách nhau bằng dấy phẩy(,)")
let arr = userInput.split(",").map(Number);
let minNumber = Math.min(...arr);
alert("Số nhỏ nhất là: " + minNumber);