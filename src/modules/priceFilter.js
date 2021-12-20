import getData from "./getData";
import renderGoods from "./renderGoods";
import { filterPrice, hotSailFilter } from "./filters";

const priceFilter = () => {
  const minInput = document.getElementById("min");
  const maxInput = document.getElementById("max");
  const checkSale = document.getElementById("discount-checkbox");
  const checkMarker = document.querySelector(".filter-check_checkmark");
  minInput.addEventListener("input", () => {
    getData().then((goods) =>
      renderGoods(
        filterPrice(
          hotSailFilter(goods, checkSale.checked),
          minInput.value,
          maxInput.value
        )
      )
    );
  });
  maxInput.addEventListener("input", () => {
    getData().then((goods) =>
      renderGoods(
        filterPrice(
          hotSailFilter(goods, checkSale.checked),
          minInput.value,
          maxInput.value
        )
      )
    );
  });
  checkSale.addEventListener("change", () => {
    if (checkSale.checked) {
      checkMarker.classList.add("checked");
    } else {
      checkMarker.classList.remove("checked");
    }

    getData().then((goods) =>
      renderGoods(
        filterPrice(
          hotSailFilter(goods, checkSale.checked),
          minInput.value,
          maxInput.value
        )
      )
    );
  });
};
export default priceFilter;
