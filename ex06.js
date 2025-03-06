//Bước 1: tạo mảng số nguyên ngẫu nhiên có từ 10 đến 20 phần tử;
let arrLength = Math.floor(Math.random()*11) + 10;  //Ngẫu nhiên từ 10 đến 2020
let arr = [];
for (let i = 0; i < arrlength; i++){
    arr.pust(Math.floor(Math.random()* 100)); //số ngẫu nhiên từ 0 đén 99

}
console.log("Mảng số nguyên: ", arr);

//Bước 2: Khai báo biến tổng số chẵn và số lẻ;
let sumOdd = 0; //tổng số lẻ
let sumEven = 0;  // tổng số chẵnchẵn

//Bước 3:  Sử dụng vòng lặp for để tính tổng
for (let i = 0; i < arr.length; i++){
    if( arr[i] % 2 ===0){
        sumEven += arr[i];

    }else {
        sumOdd += arr[i];

    }
}
alert("Tổng số lẻ trong mảng: " + sumOdd);
alert("Tổng số chẳn trong mảng: " + sumEven);



//Dùng while
let i = 0;
while (i < arr.length){
    if (arr[i] % 2 === 0){
        sumEven += arr[i];

    }else {
        sumOdd += arr[i];
    }
    i++;
}


//Dùng do...while

let j = 0;
do {
    if (arr[j] % 2 === 0){
        sumEven += arr[j];
    }else {
        sumOdd += arr[j];
    }
    j++;
} while ( j < arr.length);