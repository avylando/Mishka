var popupAdd = document.querySelector(".modal-add");
var orderButton = document.querySelector(".best-product__order-btn");
var cartButton = document.querySelectorAll(".product__order-button");

if (orderButton) {
  orderButton.addEventListener("click", function (evt) {
    popupAdd.classList.add("modal--show");
  }
)};

if (cartButton) {
  cartButton.addEventListener("click", function (evt) {
    popupAdd.classList.add("modal--show");
  }
)};
