document
  .querySelector("#genre-button")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    document.querySelector("#genre-dropdown").classList.toggle("hidden");
  });

window.addEventListener("click", function () {
  document.querySelector("#genre-dropdown").classList.add("hidden");
});
