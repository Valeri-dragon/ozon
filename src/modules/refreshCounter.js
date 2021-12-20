const refreshCounter = () => {
  const cartCounter = document.querySelector(".counter");
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  cartCounter.textContent = cart.length;
};
export default refreshCounter;
