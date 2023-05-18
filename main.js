let darkmodtoggler = document.querySelector(".toggle");
let body = document.querySelector(".light");
let toptitle = document.querySelector(".title");
let followcount = document.querySelectorAll(".follower-counter");
let count = document.querySelectorAll(".count");
let cards = document.querySelectorAll(".card");
let overcard = document.querySelectorAll(".over-card");
darkmodtoggler.onclick = () => {
    darkmodtoggler.classList.toggle("toleft");   
    darkmodtoggler.classList.toggle("dark-mode-card");   
    body.classList.toggle("dark-mode");   
    toptitle.classList.toggle("light-mode-text");   
    followcount.forEach((e)=> {
        e.classList.toggle("light-mode-text");   
    })

    count.forEach((e) => {
        e.classList.toggle("light-mode-text");
    })

    cards.forEach((e) => {
        e.classList.toggle("dark-mode-card");
    }) 
    overcard.forEach((e) => {
        e.classList.toggle("dark-mode-card");
    })
}