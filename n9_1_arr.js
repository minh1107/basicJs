var language = [
    'javascript',
    'php',
    'Ruby',
    'C++',
]

var newStringLanguage = language.toString()
console.log(newStringLanguage)
var joinString = language.join(', ')
console.log(joinString)
language.push('C#')
language.unshift('Python')
console.log(language)

// concat noi nhieu mang lai voi nha
var no1 = [1,2,3,4,5,6,7,8,9]
var no2 = [10,11,12,13,14,15,16]
var no3 = [17,18,19,20,21,22]
var no4 = no1.concat(no2,no3)
console.log(no4)
// =>  out put la [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]








/*
copyWithin() được sử dụng khi bạn muốn trích một đoạn 
trong mảng và ghi đè vào một đoạn khác trong chính mảng đó.

Cú pháp: array.copyWithin(target, start, end). Trong đó:

target: Vị trí bắt đầu ghi đè.
start: Không bắt buộc, là vị trí bắt đầu của mảng muốn trích,
mặc định là 0.
end: Không bắt buộc, là vị trí kết thúc của mảng muốn trích,
mặc định là độ dài của mảng.
Lưu ý: copyWithin() sẽ không bao giờ làm thay đổi số lượng phần
tử có trong mảng.
*/

var no5 = [1,2,3,4,5,6,7,8,9,10]
no5.copyWithin(0, 2, 4) // 0 là vị trí bắt đầu ghi đè ,
// 2 là vị trí bắt đầu lấy vị giá trị ghi đè
// 4 là vị trí các vị trí kết thúc ghi đè 1 đơn vị
console.log(no5)
[3,4,3,4,5,6,7,8,9,10]