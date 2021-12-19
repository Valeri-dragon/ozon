export const searchFilter = (goods, value) => {
  //фильтруем наши value

  return goods.filter((goodsItem) => {
    //ниже остаются товары у которых есть sale
    //return goodsItem.sale === true;
    //const result = value.charAt(0).toUpperCase() + value.slice(1);
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });
};
export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};
export const filterPrice = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.price === value;
  });
};
