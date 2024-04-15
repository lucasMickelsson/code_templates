let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    const headers= this.document.getElementById("headers");
    const navbarbutton= this.document.getElementById("navbarbutton");
    const logo = this.document.getElementById("logoStyle");
    const navbar = document.querySelector(".navbar");

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
    if (this.window.scrollY >3555 && scrollTop > lastScrollTop) {
       navbarbutton.style.backgroundColor="black";
       navbarbutton.style.color="white";
    } else {
        navbarbutton.style.backgroundColor="white";
        navbarbutton.style.color="black";
        logo.style.backgroundColor="white";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);