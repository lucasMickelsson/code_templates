let slideIndex = 0;
      const slides = document.getElementsByClassName("quote-slide");
      const progressBars = document.getElementsByClassName("progress-bar");

      function showSlides() {
        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active");
          progressBars[i].classList.remove("active");
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].classList.add("active");
        progressBars[slideIndex - 1].classList.add("active");
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
      }

      showSlides();