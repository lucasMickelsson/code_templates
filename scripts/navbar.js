let lastScrollTop = 0;
const blackLogo = "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(262deg) brightness(101%) contrast(105%)";
const whiteLogo = "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(159deg) brightness(105%) contrast(104%)";

window.addEventListener("load", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    const header = document.querySelector("header");

    checkTargetDivs(header, scrollTop);

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);
window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    const header = document.querySelector("header");

    checkTargetDivs(header, scrollTop);

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Check if the header is within the target div
function checkTargetDivs(header, scrollTop) {
    const logo = document.getElementById("logoStyle");
    const checkDivs = document.querySelectorAll(".target, .transparent-background");
    const navbartext = document.querySelectorAll(".navbar-text");

    for (let i = 0; i < checkDivs.length; i++) {
        const checkDiv = checkDivs[i];
        const targetPosition = checkDiv.getBoundingClientRect().top;
        const bottomTargetPosition = checkDiv.getBoundingClientRect().bottom + 40;
        const headerPosition = header.getBoundingClientRect().bottom - 43;

        if (headerPosition > targetPosition && headerPosition < bottomTargetPosition) {
            if (checkDiv.classList.contains("transparent-background")) {
                console.log("transparent");
                header.style.backgroundColor = "transparent";
                logo.style.filter = whiteLogo;
                navbartext.forEach(text => text.style.color = "white");
            } else {
                console.log("black");
                header.style.backgroundColor = "rgb(26 26 26)";
                logo.style.filter = whiteLogo;
                navbartext.forEach(text => text.style.color = "white");
            }
            return; // Exit loop once condition is met
        }
    }

    console.log("white");
    header.style.backgroundColor = "white";
    logo.style.filter = "brightness(0) saturate(100%)";
    navbartext.forEach(text => text.style.color = "black");
}
