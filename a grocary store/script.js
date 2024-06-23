
const body = document.querySelector("body"),
    toggleswitch = document.getElementById("toggle-switch");

toggleswitch.addEventListener("click", () => {
    body.classList.toggle("dark");
})