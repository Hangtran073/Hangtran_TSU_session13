let arr = [];

while (arr.length < 10) {
    let num = Math.floor(Math.random() * 100) + 1;
    arr.push(num);
}
console.log("Mảng ngẫu nhiên gồm 10 phần tử: ", arr);