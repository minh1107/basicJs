/*
Hàm được xây dựng sẵn - built-in function
1. alert - bật lên cửa sổ hộp thoại
2. console - log error warning
3. Confirm
4. Prompt
5. Set interval // chạy 1 function sau 1 khoảng thời gian
6. Set timeout // chạy 1 function liên tục sau 1 khoảng thời gian
*/

// alert('this is a alert'); // tạo ra 1 thông báo
console.log('this is a alert'); // click f11 select console in ra ở bảng điều kiển
console.error('this is error')
// confirm('Bạn đồng ý không: ')
// var c = prompt('Điền vào đây')
// console.log(c); 
var n = 0;
setTimeout(() => {
    console.log(1 + n)
    n++;
}, 5000)
n = 0
// setInterval(() => {
//     n++;
//     console.log(n);
// }, 5000);
