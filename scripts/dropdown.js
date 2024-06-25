document
.getElementById("dropdownButton")
.addEventListener("click", function () {
  document.getElementById("dropdownList").classList.toggle("show");
});

window.onclick = function (event) {
if (!event.target.matches(".knapp")) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains("show")) {
      openDropdown.classList.remove("show");
    }
  }
}
};
document
.querySelectorAll(".dropdown-content li a")
.forEach(function (element) {
  element.addEventListener("click", function (event) {
    //event.preventDefault(); // Prevent default link behavior
    var selectedText = this.textContent || this.innerText;
    document.getElementById("dropdownButton").textContent =
      selectedText;
    document.getElementById("dropdownList").classList.remove("show");
  });
});