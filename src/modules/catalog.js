import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filters";
const catalog = () => {
  const btnCatalog = document.querySelector(".catalog-button > button");
  const catalogModal = document.querySelector(".catalog");
  const catalogModalItems = document.querySelectorAll(".catalog li");
  let isOpen = false;
  btnCatalog.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      catalogModal.style.display = "flex";
    } else {
      catalogModal.style.display = "";
    }
  });
  catalogModalItems.forEach((item) => {
    item.addEventListener("click", () => {
      const text = item.textContent;

      console.log(text);
      getData().then((goods) => renderGoods(categoryFilter(goods, text)));
    });
  });
  catalogModal.addEventListener("mouseleave", () => {
    catalogModal.style.display = "";
  });
};
export default catalog;
