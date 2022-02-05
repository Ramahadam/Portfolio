
// function myFunction(){
//     var navbarLists = document.getElementById("navbarLists");
//     if(navbarLists.className ==="navbar-lists"){
//         navbarLists.className +=" showNav";
//     }
//     else{
//         navbarLists.className = "navbar-lists";
//     }
// }

let navLists = document.querySelector(".navbar-lists");
let btn = document.querySelector(".nav-toggler");


btn.addEventListener('click',function(){
    navLists.classList.toggle("active");
});