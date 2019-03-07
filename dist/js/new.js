(function() {
  // Select DOM Items
  const navToggle = document.querySelector(".header__nav-toggle");
  const nav = document.querySelector(".header__nav");

  // Set Initial State of Menu
  let showMenu = false;

  // Add listener for click
  navToggle.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      console.log("toggling menu on...");
      nav.classList.add("show");
      showMenu = true;
    } else {
      console.log("toggling menu off...");
      nav.classList.remove("show");
      showMenu = false;
    }
  }
})();
