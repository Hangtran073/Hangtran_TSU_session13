let arr = [5, 12, 23, 37, 45, 56, 68, 79, 92];
let userInput = Number(prompt("Nhập vào một số bất kỳ: "));
if( arr.includes(userInput)){
    alert("Bingo");
}else {
    alert("Chúc bạn may mắn lần sau!");
}