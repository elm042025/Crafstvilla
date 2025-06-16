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

//! --------Booking.html totalcost calculation ---------------//

//* --------Prices------------

let mosaicKitPrice = 400;
let waterColorKitPrice = 200;
let acrylicKitPrice = 300;

//* -----------DOM-------------

const errorChoice = document.getElementById("error-choice");
let totalCost = document.getElementById("total-cost");

//! ------------------ totalCost function -------------------------//

function calculateTotalCost() {
   const mosaicSelect = parseInt(document.getElementById("mosaic-artwork-type").value) || 0;

   const waterColorSelect = parseInt(document.getElementById("watercolor-artwork-type").value) || 0;

   const acrylicSelect = parseInt(document.getElementById("acrylic-artwork-type").value) || 0;

   const total = mosaicKitPrice * mosaicSelect + waterColorKitPrice * waterColorSelect + acrylicKitPrice * acrylicSelect;

   if (total === 0) {
      errorChoice.textContent = "Please choose a kit";
   } else {
      errorChoice.textContent = "";
   }
   totalCost.textContent = total;
}
document.querySelectorAll("select").forEach((select) => {
   select.addEventListener("change", calculateTotalCost);
});
calculateTotalCost();

//!--------------------------------------------------------------//
