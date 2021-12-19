import getData from "./getData";
import renderGoods from "./renderGoods";
import { filterPrice } from "./filters";

const priceFilter = () => {
  const filterBlock = document.querySelector(".filter");
  const formFilter = filterBlock.querySelectorAll("form");
  formFilter.forEach((formItem) => {
    formItem.addEventListener("input", (event) => {
      //getData().then((goods) => renderGoods(filterPrice(goods, event))); //отправка данных от сервера из модуля

      if (event.target.closest("#min")) {
        const min = event.target.value;
        getData().then((goods) => renderGoods(filterPrice(goods, event)));
      }
    });
  });
  //console.log(filterPrice);
};
export default priceFilter;
