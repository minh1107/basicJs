document.getElementsByClassName("text_h1")[0].innerHTML = "Hello friend"
document.getElementsByClassName("text_h1")[0].style.fontSize = "35px"
document.getElementsByClassName("text_h1")[0].style.color = "yellow"
document.write(5+6)
// window.alert("hello world")
// alert("nice") 
console.log("hello world"); // in ra dong chữ hello world ở phần console trong inspect

var s = document.querySelector('.text_h1')
s.style.fontSize = "100px"
Object.assign(s.style, { 
    fontSize: "30px" ,
    color: "green" ,
    fontFamily: "Helvetica"
})