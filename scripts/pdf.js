document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("openPdfButton");

    button.addEventListener("click", function () {
      window.open(
        "https://files.hinge.co/5865a953a43a955d5dfeacd42ce1b14c37515144.pdf/Hinge_5_5x8_5_Download_Feb9_4657e3c776.pdf",
        "_blank"
      );
    });
  });