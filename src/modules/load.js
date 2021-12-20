import getData from "./getData";
import renderGoods from "./renderGoods";
import postData from "./postData";
const load = () => {
  getData().then((goods) => renderGoods(goods));
};
export default load;
