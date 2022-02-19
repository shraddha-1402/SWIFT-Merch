const dropdownOpener = document.querySelector(".nav-dropdown-link");
const dropdown = document.querySelector(".nav-dropdown");

const toggleDropdown = () => {
  if(dropdown.style.display === "" || dropdown.style.display === "none")
    dropdown.style.display = "block";
  else
    dropdown.style.display = "none";
}

dropdownOpener.addEventListener("click", toggleDropdown);