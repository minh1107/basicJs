let person = "hello world"
var blog  = ['one', 'two', 'three', 'four', 'five']
function logger(...rest) {
    for (var i = 0; i < blog.length; i++) {
        console.log(rest[i])
    }
}
logger(...blog)
console.log(...blog);

(function(message) {
    console.log('Hello: ', message)
})('nam')