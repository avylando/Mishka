var popupAdd = document.querySelector(".modal--add");
var popupSuccess = document.querySelector(".modal--success");
var orderButton = document.querySelector(".best-product__order-btn");
var cartButton = document.querySelector(".product__order-button");
var closeButton = popupAdd.querySelector(".modal__close-button");
var addButton = popupAdd.querySelector(".modal__button--add");
var modalCloseButton = popupSuccess.querySelector(".modal__button--close");

if (popupAdd) {
  if (orderButton) {
    orderButton.addEventListener("click", function (evt) {
      popupAdd.classList.remove("modal--close");
      popupAdd.classList.add("modal--show");
    }
  )};

  if (cartButton) {
    cartButton.addEventListener("click", function (evt) {
      popupAdd.classList.remove("modal--close");
      popupAdd.classList.add("modal--show");
    }
  )};

  closeButton.addEventListener("click", function (evt) {
    popupAdd.classList.remove("modal--show");
    popupAdd.classList.add("modal--close");
  })

  addButton.addEventListener("click", function (evt) {
    popupAdd.classList.remove("modal--show");
    popupAdd.classList.add("modal--close");
    popupSuccess.classList.remove("modal--close");
    popupSuccess.classList.add("modal--show");
  })

  modalCloseButton.addEventListener("click", function (evt) {
    popupSuccess.classList.remove("modal--show");
    popupSuccess.classList.add("modal--close");
  })
}



