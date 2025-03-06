let englishWords = ["hello", "goodbye", "dog", "cat", "book", "water"];
let vietnameseWords = ["xin chào", "tạm biệt", "chó", "mèo", "sách", "Nước"];

//Nhập từ tiếng anh cần tra cứu

let searchWord = prompt("Nhập từ tiếng anh cần tra:").toLowerCase();

// Tìm kiếm từ trong mảng tiếng anh
let index = englishWords.indexOf(searchWord);

if (index !== -1){
    //Hiển thị nghĩa tiếng việt tìm thấy
    alert(`Nghĩa của "${searchWord}" là: ${vietnameseWords[index]}`);

}else {
    alert ( `Không tìm thấy từ "${searchWord}" trong từ điển.`);
}