import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

const search = () => {
  const searcBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-wrapper_input");
  const valueInput = () => {
    const eventValueInput = searchInput.value;
    getData().then((goods) =>
      renderGoods(searchFilter(goods, eventValueInput))
    ); //отправка данных от сервера из модуля
  };
  searchInput.addEventListener("input", valueInput);
  searcBtn.addEventListener("click", valueInput);
  searchInput.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      // можете делать все что угодно со значением текстового поля
      valueInput();
    }
  });
};
export default search;
