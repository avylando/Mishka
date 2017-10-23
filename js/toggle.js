  var mainMenu = document.querySelector(".main-menu");
  var menuToggle = document.querySelector(".page-header__toggle");
  var toggleIcon = document.querySelector(".page-header__toggle-icon");
  var headerTitle = document.querySelector(".page-header__title");

  mainMenu.classList.remove("main-menu--nojs");
  menuToggle.classList.remove("page-header__toggle--nojs");
  // headerTitle.classList.remove("page-header__title--nojs");
  // if (promo) {
  //   promo.classList.remove("promo--nojs");
  // }
  // if (blockHead) {
  //   blockHead.classList.remove("block-head__wrapper--nojs");
  // }

menuToggle.addEventListener("click", function() {

    if (mainMenu.classList.contains("main-menu--closed")) {
      mainMenu.classList.remove("main-menu--closed");
      mainMenu.classList.add("main-menu--opened");
      toggleIcon.classList.add("page-header__toggle-icon--cross");
    } else {
      mainMenu.classList.add("main-menu--closed");
      mainMenu.classList.remove("main-menu--opened");
      toggleIcon.classList.remove("page-header__toggle-icon--cross");
    }
});
