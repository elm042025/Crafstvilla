//! --------Booking.html totalcost calculation ---------------//

//* --------Prices------------

let mosaicKitPrice = 400;
let waterColorKitPrice = 200;
let acrylicKitPrice = 300;

//* -----------DOM-------------

const errorChoice = document.getElementById("error-choice");

let totalCost = document.getElementById("total-cost");
const bookingForm = document.getElementById("booking-form");
const bookNowBtn = document.getElementById("bookNow-btn");
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

//! ------------- just some confetti fun -----------//

bookingForm.addEventListener("submit", function (event) {
   event.preventDefault(); // Prevent form from refreshing the page

   confetti(); // Trigger the fun 🎉

   // Optional: reset the form or show a success message
   bookingForm.reset();
   totalCost.textContent = "0";
});
