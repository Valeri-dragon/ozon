"use strict";
import renderCart from "./renderCart";
import postData from "./postData";
import refreshCounter from "./refreshCounter";
const cart = () => {
  const cartBtn = document.getElementById("cart");
  const cartModal = document.querySelector(".cart");
  const cartCloseBtn = cartModal.querySelector(".cart-close");
  const cartTotal = cartModal.querySelector(".cart-total >span");
  const cartSendBtn = cartModal.querySelector(".cart-confirm");
  const cartWrapper = document.querySelector(".cart-wrapper");
  const goodsWrapper = document.querySelector(".goods");

  const openCart = () => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    cartModal.style.display = "flex";
    renderCart(cart);
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
  };

  const closeCart = () => {
    cartModal.style.display = "";
  };
  cartBtn.addEventListener("click", openCart);
  cartModal.addEventListener("click", (event) => {
    event.target == cartModal || event.target == cartCloseBtn
      ? closeCart()
      : event.stopPropagation();
  });
  goodsWrapper.addEventListener("click", (event) => {
    if (event.target.closest(".btn-primary")) {
      const card = event.target.closest(".card");

      const key = card.dataset.key;

      const goods = JSON.parse(localStorage.getItem("goods"));

      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

      const goodItem = goods.find((item) => {
        return item.id === +key;
      });

      cart.push(goodItem);
      localStorage.setItem("cart", JSON.stringify(cart));
      refreshCounter();
    }
  });
  cartWrapper.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-primary")) {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      const card = event.target.closest(".card");
      const key = card.dataset.key;

      const index = cart.findIndex((item) => {
        return item.id === +key;
      });

      cart.splice(index);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart(cart);
      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
      refreshCounter();
    }
    cartSendBtn.addEventListener("click", () => {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      postData(cart).then(() => {
        localStorage.removeItem("cart");

        renderCart([]);
        cartTotal.textContent = 0;
        refreshCounter();
        closeCart();
      });
    });
  });
};
export default cart;
