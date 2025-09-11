    const numText = document.getElementById("numText");
    const dropdown1 = document.getElementById("myDropdown1");

    if (numText && dropdown1) {
      numText.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown1.classList.toggle("show");
      });

      document.addEventListener("click", function (e) {
        if (!dropdown1.contains(e.target) && e.target !== numText) {
          dropdown1.classList.remove("show");
        }
      });
    }

    const toggleBtn2 = document.getElementById("currencyToggle");
    const dropdown2 = document.getElementById("myDropdown2");

    if (toggleBtn2 && dropdown2) {
      toggleBtn2.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown2.classList.toggle("show");
      });

      document.addEventListener("click", function (e) {
        if (!dropdown2.contains(e.target) && e.target !== toggleBtn2) {
          dropdown2.classList.remove("show");
        }
      });
    }


    const toggleBtn3 = document.querySelector(".dropdown-toggle3");
    const dropdown3 = document.querySelector(".mydropdown3");

    if (toggleBtn3 && dropdown3) {
      toggleBtn3.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown3.classList.toggle("show");
      });

      document.addEventListener("click", function (e) {
        if (!dropdown3.contains(e.target) && e.target !== toggleBtn3) {
          dropdown3.classList.remove("show");
        }
      });
    }

    
    const dateRangeInput = document.getElementById("dateRange");
    if (dateRangeInput) {
      flatpickr(dateRangeInput, {
        mode: "range",
        dateFormat: "D, d M",
        minDate: "today",
        showMonths: 2,
        onClose: function (selectedDates, dateStr, instance) {
          if (selectedDates.length === 2) {
            const start = instance.formatDate(selectedDates[0], "D, d M");
            const end = instance.formatDate(selectedDates[1], "D, d M");
            dateRangeInput.value = start + " - " + end;
          }
        }
      });
    }
  


function scrollToForm() {
  const searchForm = document.querySelector(".search-section");
  if (searchForm) {
    searchForm.scrollIntoView({ behavior: "smooth" });
  }
}
