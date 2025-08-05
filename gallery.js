document.addEventListener("DOMContentLoaded", function () {
   // Get all radio inputs with class 'filter-input'
   const filters = document.querySelectorAll(".filter-input");
   // Get all gallery items
   const items = document.querySelectorAll(".gallery-item");

   // Loop through each filter radio button
   filters.forEach((filter) => {
      filter.addEventListener("change", function () {
         // Get the filter type (e.g. "watercolor", "mosaic", "acrylic", "all")
         let selected = filter.id.replace("filter-", "");

         items.forEach((item) => {
            // If "all" is selected, show everything
            if (selected === "all") {
               item.style.display = "";
            }
            // Otherwise, check if the item matches the selected type
            else {
               if (item.classList.contains(selected)) {
                  item.style.display = "";
               } else {
                  item.style.display = "none";
               }
            }
         });
      });
   });
});
