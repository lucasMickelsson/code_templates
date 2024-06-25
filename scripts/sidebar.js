// JavaScript to handle the hamburger menu
      // JavaScript to handle the hamburger menu and side menu
      const hamburger = document.getElementById("hamburger");
      const sidemenu = document.getElementById("sidemenu");
      const backdrop = document.getElementById("backdrop");
      const header = document.querySelector("header");

      hamburger.addEventListener("click", function () {
        sidemenu.classList.toggle("active");
        backdrop.classList.toggle("active");
        if(header.style.backgroundColor=="white" && sidemenu.classList.contains("active")){
          document.getElementById("logoStyle").style.filter=whiteLogo;
          
        }
        else if(header.style.backgroundColor=="white" && !sidemenu.classList.contains("active")){
          document.getElementById("logoStyle").style.filter=blackLogo;
        }
        else if(header.style.backgroundColor=="transparent" && !sidemenu.classList.contains("active")){
          document.getElementById("logoStyle").style.filter=whiteLogo;
        }
        

      });

      backdrop.addEventListener("click", function () {
        sidemenu.classList.remove("active");
        backdrop.classList.remove("active");
      });
      document
        .getElementById("hamburger")
        .addEventListener("click", function () {
          var sidemenu = document.getElementById("sidemenu");
          sidemenu.style.display =
            sidemenu.style.display === "flex" ? "none" : "flex";
        });

      function checkhideDownloadButton() {
        const button = document.getElementById("navbar-download");
        if (window.innerWidth <= 768) {
          button.style.display = "block";
        } else {
          button.style.display = "none";
        }
      }

      // Initial check when the script loads
      checkhideDownloadButton();

      // Add event listener for window resize
      window.addEventListener("resize", function () {
        // Call the function whenever the window is resized
        checkhideDownloadButton();
      });