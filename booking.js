//! --------Booking.html totalcost calculation ---------------//

//* --------Prices------------

let mosaicKitPrice = 400;
let waterColorKitPrice = 200;
let acrylicKitPrice = 300;

//* -----------DOM-------------//

const errorChoice = document.getElementById("error-choice");

let totalCost = document.getElementById("total-cost");
const bookingForm = document.getElementById("booking-form");
const bookNowBtn = document.getElementById("bookNow-btn");
const form = document.getElementById("booking-form");

//! ------------------ totalCost function -------------------------//

function calculateTotalCost() {
   const mosaicSelect = parseInt(document.getElementById("mosaic-artwork-type").value) || 0;

   const waterColorSelect = parseInt(document.getElementById("watercolor-artwork-type").value) || 0;

   const acrylicSelect = parseInt(document.getElementById("acrylic-artwork-type").value) || 0;

   const total = mosaicKitPrice * mosaicSelect + waterColorKitPrice * waterColorSelect + acrylicKitPrice * acrylicSelect;

   totalCost.textContent = total + " NOK";
}
document.querySelectorAll("select").forEach((select) => {
   select.addEventListener("change", calculateTotalCost);
});
calculateTotalCost();

//! ------------- just some confetti fun -----------//

bookingForm.addEventListener("submit", function (event) {
   event.preventDefault(); // Prevent form from refreshing the page

   // Get kit quantities as numbers
   const mosaic = parseInt(document.getElementById("mosaic-artwork-type").value) || 0;
   const watercolor = parseInt(document.getElementById("watercolor-artwork-type").value) || 0;
   const acrylic = parseInt(document.getElementById("acrylic-artwork-type").value) || 0;

   // Check if all are zero
   if (mosaic + watercolor + acrylic === 0) {
      document.getElementById("error-choice").textContent = "Please select at least one art kit!";
      document.getElementById("error-choice").scrollIntoView({ behavior: "smooth", block: "center" });
      return; // Stop further code if not valid!
   } else {
      document.getElementById("error-choice").textContent = ""; // Clear error if fixed

      confetti({ particleCount: 300, spread: 160 }); // Trigger the fun 🎉

      // Optional: reset the form or show a success message
      bookingForm.reset();
      totalCost.textContent = "0 NOK";
   }
});
