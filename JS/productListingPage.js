const filterOpenerButtons = document.querySelectorAll(".filter-mobile-btn");
const closingSortButton = document.querySelector("#close-sort-tab");
const closingFilterButton = document.querySelectorAll(".close-filter-tab");

/**
 * Filter tab opening function
 * Opens the Sort and Filter tab in mobile
 * @param {*} event 
 */
const showFilterTab = (event) => {
    document.querySelector(".filter-sidebar").classList.remove("hidden-for-mobile");
    if(event.target.id == "open-sort-tab"){
        document.querySelector("#sorting-option").classList.remove("hidden-for-mobile");
        closingSortButton.classList.remove("hidden");
    }
    else{
        document.querySelector("#filter-option").classList.remove("hidden-for-mobile");
        closingFilterButton[0].parentElement.classList.remove("hidden");
    }
}

/**
 * Filter Tab closing function
 * Hides the sort and filter tab when clicked on closing buttons
 * @param {*} event 
 */
const hideFilterTab = (event) => {
    document.querySelector(".filter-sidebar").classList.add("hidden-for-mobile");
    if(event.target.id == "close-sort-tab"){
        document.querySelector("#sorting-option").classList.add("hidden-for-mobile");
        closingSortButton.classList.add("hidden");
    }

    else{
        document.querySelector("#filter-option").classList.add("hidden-for-mobile");
        closingFilterButton[0].parentElement.classList.add("hidden");
    }
}

filterOpenerButtons.forEach(btn => btn.addEventListener("click", showFilterTab));
closingSortButton.addEventListener("click", hideFilterTab);
closingFilterButton.forEach(btn => btn.addEventListener("click", hideFilterTab));
