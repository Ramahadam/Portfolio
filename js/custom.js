
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


//Owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoPlaySpeed: 5000,
    autoPlayTimeout: 5000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})