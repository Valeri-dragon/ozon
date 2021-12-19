//в getData передаем str если есть строка в инпут поиска

const getData = (str) => {
  return fetch(`
  https://ozon-8dbe8-default-rtdb.firebaseio.com/goods.json
  `).then((response) => response.json());
};
export default getData;
