// bước 1: Tạo mảng có từ 10 đến 20 phần tủ
let arrLength = Math.floor(Math.random()* 11) + 10;
let arr = [];
for (let i = 0; i < arrLength; i++){
    arr.push(Math.floor(Math.random() * 10)); //số phần tử từ 0 đến 9;

}
console.log("Mảng số nguyên:", arr);

//Bước 2: Nhập số nguyên k từ người dùng;
let k = Number(prompt("Nhập số nguyên cần kiểm tra:"));


//Bước 3: Đếm số lần xuất hiện của k

let count = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === k){
        count++;
    }
}
alert( `Số ${k} xuất hiện ${count} lần trong mảng.`);
