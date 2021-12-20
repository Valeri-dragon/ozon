import postData from "./postData";
import getData from "./getData";
import renderGoods from "./renderGoods";

const load = () => {
  getData().then((goods) => renderGoods(goods));
};
export default load;
