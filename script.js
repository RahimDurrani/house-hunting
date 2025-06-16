var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
const rent = document.querySelector('#rent')
let txt = document.querySelector('#txt')
var flag  = 0;
btn1.addEventListener('click', function(){
    btn1.style.backgroundColor = "#f57e16";
    btn1.style.color="white"
    btn1.style.border = "white"
     btn2.style.backgroundColor = "white";
    btn2.style.color="#f57e16"
    btn2.style.border = "#f57e16"
  
    txt.innerHTML = "Sale Property "
    if (flag == 0) {
    rent.style.display = "block";
    flag = 1;
} else {
    rent.style.display = "none"; // corrected from "hidden"
    flag = 0;
}

})
btn2.addEventListener('click',function(){
    btn2.style.backgroundColor = "#f57e16";
    btn2.style.color="white"
    btn2.style.border = "white"
    btn1.style.backgroundColor = "white";
    btn1.style.color="#f57e16"
    btn1.style.border = "#f57e16"
    txt.innerHTML = "Rent Property"
// display
if (flag == 0) {
    rent.style.display = "block";
    flag = 1;
} else {
    rent.style.display = "none"; // corrected from "hidden"
    flag = 0;
}

})


