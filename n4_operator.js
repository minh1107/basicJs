// khác nhau giữa toán tử ==  và  ===
var a = '4'
var b = 4
if(a === b) {
    console.log(true)
}
else console.log(false)
if(a == b) {
    console.log(true)
}
else console.log(false)
// a++ và  ++a khác nhau ở đâu
var c = 5
console.log(c++) // in ra song moi cộng
console.log(++c) // công song mới in ra
