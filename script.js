//!--------------- Reusable darkMode code ----------------------//
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
   document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
   document.body.classList.toggle("dark");

   const theme = document.body.classList.contains("dark") ? "dark" : "light";
   localStorage.setItem("theme", theme);
});
//!------------------------------------------------------------//
