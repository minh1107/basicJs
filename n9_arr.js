var courses = [
    {
        name: 'javaScript',
        coin: 400,
        date: '10/2/2022'
    },
    {
        name: 'Java',
        coin: 200,
        date: '11/3/2022'
    },
    {
        name: 'Java',
        coin: 500,
        date: '14/4/2022'
    }
];

var root = document.querySelector('.root')
// forEach là phương thức làm việc với mảng, nó nhận vào 2 đối số là mảng và thứ tự trong mảng và cho phép bạn thao tác với từng phần tử
// của mảng.
// forEach trả về giá trị của các phần tử trong mảng
courses.forEach(function(course, index) {
    console.log(course, index);
})
var count = 0
// Every trả về true hoặc false 
// truyền vào 2 tham số là từng phần tử của mảng và thứ tự trong mảng và return về 1 phép so sánh để trả về 1 boolean
// giá trị của tất cả phần tử so sanh phải true thì mới return về true 1 giá trị so sánh là false thì giá về false 
var isCoin400 = courses.every(function(course, index) {
    // return course.coin == 400
    return index == count++
})
console.log(isCoin400)

// some trả về true hoặc false như every, nó cũng xét lần lượt các phần tử của mảng truyền vào khác là
// nó không kết thúc khi giá trị trả về là false mà nó sẽ kết thúc khi giá trị trả về là true hoặc khi đã xét hết các phần tử trong mảng
var isCoin500 = courses.some(function (course) {
    return course.coin == 300
})
console.log(isCoin500)

// find tìm phần tử được duyệt phù hợp với return trả về trong trường hợp tìm được thì kết thúc luôn phương thức find này
// và trả về phần tử đó lưu ý chỉ trả về 1 phần tử phù hợp với yêu cầu đầu tiên của mảng
var isJava = courses.find(function (course, index) {
    return course.name === 'Java'
})
console.log(isJava) // lấy ra khóa học đầu tiên phù hợp

// filter tìm tất cả các phần tử phù hợp với return(boolean) yêu cầu
var isAllJava = courses.filter(function (course, index) {
    return course.name === 'Java'
})
console.log(isAllJava) // lấy ra toàn bộ khóa học phù hợp

// map trả về từng phần tử của mảng để bạn tùy ý thay đổi hoặc tạo mới từ mảng cũ
var newCourse =  courses.map(function (course, index) {
    return {
        name: 'Khoa hoc: ' + course.name,
        coin: 'Coin: ' + course.coin,
        date: 'Ngay: ' + course.date,
        indexCourse: index,
    }
})
console.log(newCourse)












