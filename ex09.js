let arrLength = Math.floor(Math.random() * 11) + 10;
let arr = [];

for (let i = 0; i < arr.length; i++) {
    arr.push(Math.floor(Math.random() * 20) - 10); //số ngẫu nhiên từ -10 đến 10;
}
console.log("Mảng số nguyên:", arr);


//Nhập số nguyên trong target từ người dùng
let target = Number(prompt("Nhập số nguyên target:"));

//Tìm các số có tổng bằng target
let found = false;
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            console.log(`Cặp số: (${arr[i]}, ${arr[j]})`);
            alert(`Cặp số: (${arr[i]}, ${arr[j]})`);
            found = true;
        }
    }
}
if (!found) {
    alert("Không tìm thấy cặp số phù hợp.");
}