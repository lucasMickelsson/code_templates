let lastScrollTop = 0;
const blackLogo= "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(262deg) brightness(101%) contrast(105%)";
const whiteLogo= "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(159deg) brightness(105%) contrast(104%)";

window.addEventListener("scroll", function() {
    let hasReachedDiv=false;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    const headers= this.document.getElementById("headers");
    const demobutton= this.document.querySelector(".demoButton");
    const logo = this.document.getElementById("logoStyle");
    const navbar = document.querySelector(".navbar");
    const target = document.querySelector(".target");
    //const targetPosition= target.getBoundingClientRect().top;
    //const checkPosition= navbar.getBoundingClientRect().bottom;
    const checkDivs= this.document.querySelectorAll(".target");

    for(let i=0; i< checkDivs.length; i++){
        const checkDiv= checkDivs[i];
        const targetPosition= checkDiv.getBoundingClientRect().top;
        const bottomTargetPosition= checkDiv.getBoundingClientRect().bottom;
        const currentPosition= navbar.getBoundingClientRect().bottom-43;
        console.log("welcome item");

        if (currentPosition > targetPosition && currentPosition< bottomTargetPosition && scrollTop > lastScrollTop) {
            console.log("welcome item in if");
            demobutton.classList.add("demoButtonSec");
           logo.style.filter = blackLogo;
           break;
        } else {
            console.log("found item in else");
            demobutton.classList.remove("demoButtonSec");
            logo.style.filter= whiteLogo;
        }
    }

    if (scrollTop > lastScrollTop) {
        // User is scrolling down
        headers.style.opacity="0";
        navbar.classList.remove("scrollUp", "active");
    } else {
        // User is scrolling up
        headers.style.opacity="1";
        navbar.classList.add("scrollUp", "active");
    }
    // If the background color is white and we scroll down
    /*if (checkPosition-43 > targetPosition && scrollTop > lastScrollTop) {
        demobutton.classList.add("demoButtonSec");
       logo.style.filter = blackLogo;
    } else {
        demobutton.classList.remove("demoButtonSec");
        logo.style.filter= whiteLogo;
    }*/
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);