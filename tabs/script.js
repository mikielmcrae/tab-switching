const firstButton = document.querySelector(".first");
const secondButton = document.querySelector(".second");
const thirdButton = document.querySelector(".third");
const firstTab = document.querySelector(".firstTab");
const secondTab = document.querySelector(".secondTab");
const thirdTab = document.querySelector(".thirdTab");

secondButton.addEventListener('click', () => {
    
    thirdTab.classList.remove("active");
    firstTab.classList.remove("active");
    secondTab.classList.add("active");
    
    
})

thirdButton.addEventListener('click', () => {
    
    firstTab.classList.remove("active");
    secondTab.classList.remove("active");
    thirdTab.classList.add("active");
    
})

firstButton.addEventListener('click', () => {
    secondTab.classList.remove("active");
    thirdTab.classList.remove("active");
    firstTab.classList.add("active");
    
    
})