var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
const rent = document.querySelector('#rent')
let txt = document.querySelector('#txt')
const button = document.getElementById("dropdown-button");
const menu = document.getElementById("dropdown-menu");
const selected = document.getElementById("selected-option");
var se = document.querySelector("#search")
const body = document.querySelector("body")
var lbtn = document.querySelector("#l-btn")
var lform = document.querySelector("#l-form")
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
    rent.style.display = "none"; 
      btn1.style.backgroundColor = "white";
    btn1.style.color="#f57e16"
    btn1.style.border = "#f57e16"
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
    rent.style.display = "none"; 
       btn2.style.backgroundColor = "white";
    btn2.style.color="#f57e16"
    btn2.style.border = "#f57e16"
    flag = 0;
}

})
// flagCdn
  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      const flag = item.getAttribute("data-flag");
      const name = item.getAttribute("data-name");

      selected.innerHTML = `<img src="${flag}" class="w-5 h-5" /> ${name}`;
      menu.classList.add("hidden");
    });
  });

  
  document.addEventListener("click", (e) => {
    if (!document.getElementById("dropdown-wrapper").contains(e.target)) {
      menu.classList.add("hidden");
    }
  });


// list-form

lbtn.addEventListener('click',function(){
    lform.style.opacity = "1"
    body.style.backgroundColor = "black"
      body.style.overflow = "hidden"
      se.style.opacity = "0"
     lform.style.zIndex = "30"   
})

sbtn.addEventListener('click',function(){
         lform.style.opacity = "0" 
         body.style.overflow = "auto"
         
})

cl.addEventListener('click',function(){
  lform.style.opacity = "0" 
         body.style.overflow = "auto"
})




