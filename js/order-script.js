var popupAdd = document.querySelector(".modal--add");
var popupSuccess = document.querySelector(".modal--success");
var orderButton = document.querySelector(".best-product__order-btn");
var cartButton1 = document.querySelector(".product__order-button--first");
var cartButton2 = document.querySelector(".product__order-button--second");
var cartButton3 = document.querySelector(".product__order-button--third");
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

  if (cartButton1) {
    cartButton1.addEventListener("click", function (evt) {
      popupAdd.classList.remove("modal--close");
      popupAdd.classList.add("modal--show");
    }
  )};

  if (cartButton2) {
    cartButton2.addEventListener("click", function (evt) {
      popupAdd.classList.remove("modal--close");
      popupAdd.classList.add("modal--show");
    }
  )};

  if (cartButton3) {
    cartButton3.addEventListener("click", function (evt) {
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



