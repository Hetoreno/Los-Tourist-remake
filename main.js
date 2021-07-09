/* NAV mobile */
const burger = document.querySelector(".burger");
const links = document.querySelector(".mobile");
const navLinks = document.querySelectorAll(".mobile-link");

burger.addEventListener("click",()=>{
    links.classList.toggle("link-open");
    burger.classList.toggle("toggle");
});

navLinks.forEach(navi =>{
    navi.addEventListener("click",()=>{
        links.classList.toggle("link-open");
        burger.classList.toggle("toggle");
    })
})

/* NAV desktop bar scroll */
const body = document.body;
let lastScroll = 0;
window.addEventListener("scroll",()=>{
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0){
        body.classList.remove("scroll-up");
    }
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }
    lastScroll = currentScroll;
})

/* To-top arrow */
const arrow = document.querySelector(".to-top");

window.addEventListener("scroll",()=>{
    window.pageYOffset > 800 ? arrow.classList.add("active") : arrow.classList.remove("active");
});

/* Gallery grid sort */
const button = document.querySelectorAll(".list li");
const list = document.querySelectorAll(".itembox");

button.forEach((event) =>{
    event.addEventListener("click", ()=> {

        for (let i=0; i<button.length; i++){
            button[i].classList.remove("active");
        }
        event.classList.add("active");

        list.forEach((current)=>{
            current.style.display="none";
            let pictures = event.textContent.toLowerCase();
            if(current.getAttribute("data-att")===pictures || pictures === "all"){
                current.style.display="block";
            }
        })
    })  
})
/* the 'data-att' needs to match with '.list li' names*/