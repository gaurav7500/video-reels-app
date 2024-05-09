
"use strict"

let tugle_btn = document.querySelector('.toggle_button');
let show_menu = document.querySelector('.menu');
let input_form = document.querySelector('.input_box');
let nav_btn = document.querySelector('.btn_search');
let collap = document.querySelector('.collapse');
let search_btn = document.querySelector('.search');
let close_btn = document.querySelector('.close');
let navlinks =document.querySelectorAll('.wrap1 a');
let time = document.querySelectorAll('.wrap4 .h1');

time.forEach((e) => {
    let i = 0; // Initialize the counter for each element
    let clear = setInterval(function() {
        if (i >= 201) {
            clearInterval(clear);
        } else {
            e.innerHTML = i; 
            i++; 
        }
    }, 10);
});



tugle_btn.addEventListener('click', () => {
    show_menu.classList.toggle("collapse");
    tugle_btn.classList.toggle("active");
    // collap.style ="right:0";
});

navlinks.forEach((e)=>{
    e.addEventListener('click',()=>{
        // show_menu.classList.remove("menu");
        show_menu.classList.remove("collapse");
        tugle_btn.classList.remove("active");
    });
});

nav_btn.addEventListener('click', () => {
    input_form.style = "transform: scale(1);";
});
search_btn.addEventListener('click',()=>{
    search_btn.style="display:none";
    close_btn.style="display:block";
});
close_btn.addEventListener('click',()=>{
    input_form.style = "display:none";
    close_btn.style="display:none";
    search_btn.style="display:block";
});



