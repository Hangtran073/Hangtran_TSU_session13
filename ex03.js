let userInput = prompt("Nhập vào dãy số, cách nhau bằng dấu phẩy (,)");
let arr = userInput.split(",").map(Number);
let reverseArr = arr.reverse();
alert("Mảng sau khi đảo ngược: " + reverseArr.join(", "));
console.log("Mảng sau khi đảo ngược:", reverseArr);

