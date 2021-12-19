const renderGoods = (goods) => {
  //получаем конетйнер наших товаров, в который передадим все карточки с товаром с сервера
  const goodsWrapper = document.querySelector(".goods");
  //перед получением нашего массива с товарами очищаем верстку
  goodsWrapper.innerHTML = "";
  //перебор переданного массива
  goods.forEach((goodsItem) => {
    //передаем кусок верстки с карточкой товара, размещая из объекта атрибуты и текстовое содержимое
    //beforeend помещает карточку товара перед закрывающим тегом контейнера
    goodsWrapper.insertAdjacentHTML(
      "beforeend",
      //category hoverImg id img price sale title
      ` 
    
    	<div class="col-12 col-md-6 col-lg-4 col-xl-3">
								<div class="card">
                	${
                    goodsItem.sale
                      ? '<div class="card-sale">🔥Hot Sale🔥</div>'
                      : ""
                  }
									<div class="card-img-wrapper">
										<span class="card-img-top"
											style="background-image: url('${goodsItem.img}')"></span>
									</div>
									<div class="card-body justify-content-between">
										<div class="card-price">${goodsItem.price} ₽</div>
										<h5 class="card-title">${goodsItem.title}</h5>
										<button class="btn btn-primary">В корзину</button>
									</div>
								</div>
							</div>
    
    `
    );
  });
};
export default renderGoods;
