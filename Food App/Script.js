const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 80);
});

let menu=document.querySelector('#menu-icon');
let navitem=document.querySelector('navitem');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navitem.classList.toggle('open');
};

window.onscroll  = () =>{
    menu.classList.remove('bx-x');
    navitem.classList.remove('open');
};

const sr = scrollReveal({
    origin:'top',
    distance: '85px',
    duration: 2500,
    reset:true
})

sr.reveal ('.home-text',{delay:300});
sr.reveal ('.home-img',{delay:400});
sr.reveal ('.container',{delay:400});

sr.reveal ('.about-img',{});
sr.reveal ('.about-text',{delay:300});


sr.reveal ('.middle-text',{});
sr.reveal ('.row-btn,.shop-content',{delay:300});

sr.reveal ('.review-content,.contact',{delay:300});

