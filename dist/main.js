/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_priceFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/priceFilter */ \"./src/modules/priceFilter.js\");\n\r\n\r\n\r\n\r\n\r\n//import getData from \"./modules/second\";\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_priceFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _refreshCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./refreshCounter */ \"./src/modules/refreshCounter.js\");\n\r\n\r\n\r\n\r\nconst cart = () => {\r\n  const cartBtn = document.getElementById(\"cart\");\r\n  const cartModal = document.querySelector(\".cart\");\r\n  const cartCloseBtn = cartModal.querySelector(\".cart-close\");\r\n  const cartTotal = cartModal.querySelector(\".cart-total >span\");\r\n  const cartSendBtn = cartModal.querySelector(\".cart-confirm\");\r\n  const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n\r\n  //получаем конетйнер наших товаров, в который передадим все карточки с товаром с сервера\r\n  /*Кликнув по карточке мы сможем считать идентификатор, и достать именно этот объект из localStorage, и записать(разместить его) в другом объекте localStorage под названием  cart, для этого на контейнер goodsWrapper повесим обработчик события клик и будем проверять по какой именно карточке произошел клик (это называется делегированием и таким образом не важно какое количество товаров(карточек) хоть 500 000, а обработчик один)*/\r\n  const goodsWrapper = document.querySelector(\".goods\");\r\n\r\n  const openCart = () => {\r\n    const cart = localStorage.getItem(\"cart\")\r\n      ? JSON.parse(localStorage.getItem(\"cart\"))\r\n      : [];\r\n    cartModal.style.display = \"flex\";\r\n    (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n    cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n      return sum + goodItem.price;\r\n    }, 0);\r\n  };\r\n\r\n  const closeCart = () => {\r\n    cartModal.style.display = \"\";\r\n  };\r\n  cartBtn.addEventListener(\"click\", openCart);\r\n  cartModal.addEventListener(\"click\", (event) => {\r\n    // if (event.target == cartModal || event.target== cartCloseBtn) {\r\n\r\n    //   closeCart();\r\n    // }\r\n    event.target == cartModal || event.target == cartCloseBtn\r\n      ? closeCart()\r\n      : event.stopPropagation();\r\n  });\r\n  goodsWrapper.addEventListener(\"click\", (event) => {\r\n    if (event.target.closest(\".btn-primary\")) {\r\n      //по клику на элемент получаем родительский элемент - id карточки\r\n      const card = event.target.closest(\".card\");\r\n      //console.log(card.getAttribute([\"data-key\"]));\r\n      const key = card.dataset.key;\r\n      //получаем весь массив с карточками товаров из localeStorage\r\n      //для этого используем JSON.parse\r\n      //JSON.parse - переводит строку в массив\r\n      const goods = JSON.parse(localStorage.getItem(\"goods\"));\r\n      //достаем объект из localStorage и записываем в массив\r\n      //для этого создаем переменную с пустым массивом и проверкой\r\n      //есть ли сохраненные данные в корзине уже\r\n      //и если есть в localeStorage есть массив с ключом cart\r\n      //то в него и заносим данные\r\n      //иначе вносим в пустой массив\r\n      const cart = localStorage.getItem(\"cart\")\r\n        ? JSON.parse(localStorage.getItem(\"cart\"))\r\n        : [];\r\n      //достаем объект из localStorage и записываем в массив cart и сохраняем\r\n      //этот массив в localStorage с ключом cart\r\n      //для этого создаем переменную и в ней для массива goods(данные из контейнера с товарами) примняем метот  find\r\n      //метот  find-перебор массивов ищет совпадения с нашим массивом и возвращать 1 элемент массива, который подойдет под условия, которые передаем здесь id карточки\r\n      const goodItem = goods.find((item) => {\r\n        return item.id === +key;\r\n      });\r\n      //добавление в массив (и перезапись  его в LocalStorage) cart- карточек , на которых была кликнута кнопка в корзину\r\n      cart.push(goodItem);\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n      (0,_refreshCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n  });\r\n  cartWrapper.addEventListener(\"click\", (event) => {\r\n    if (event.target.classList.contains(\"btn-primary\")) {\r\n      const cart = localStorage.getItem(\"cart\")\r\n        ? JSON.parse(localStorage.getItem(\"cart\"))\r\n        : [];\r\n      const card = event.target.closest(\".card\");\r\n      const key = card.dataset.key;\r\n      //для удаления элемента из массива по кнопке которого был клик\r\n      //узнаем индекс этого элемента для этого создаем переменную и в нее передаем массив cart\r\n      const index = cart.findIndex((item) => {\r\n        return item.id === +key;\r\n      });\r\n\r\n      //и затем к cart применяем метод splice, который принимает 2 аргумента\r\n      //1 наш полученный элемент, по которому произошел клик на кнопку \"Убрать из корзины\"\r\n      //2 количество элементов , которые мы будем удалять\r\n      cart.splice(index);\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n      (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n      cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n        return sum + goodItem.price;\r\n      }, 0);\r\n      (0,_refreshCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    }\r\n    cartSendBtn.addEventListener(\"click\", () => {\r\n      const cart = localStorage.getItem(\"cart\")\r\n        ? JSON.parse(localStorage.getItem(\"cart\"))\r\n        : [];\r\n      (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n        localStorage.removeItem(\"cart\");\r\n\r\n        (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\r\n        cartTotal.textContent = 0;\r\n        (0,_refreshCounter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        closeCart();\r\n      });\r\n    });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\nconst catalog = () => {\r\n  const btnCatalog = document.querySelector(\".catalog-button > button\");\r\n  const catalogModal = document.querySelector(\".catalog\");\r\n  const catalogModalItems = document.querySelectorAll(\".catalog li\");\r\n  let isOpen = false;\r\n  btnCatalog.addEventListener(\"click\", () => {\r\n    isOpen = !isOpen;\r\n    if (isOpen) {\r\n      catalogModal.style.display = \"flex\";\r\n    } else {\r\n      catalogModal.style.display = \"\";\r\n    }\r\n  });\r\n  catalogModalItems.forEach((item) => {\r\n    item.addEventListener(\"click\", () => {\r\n      const text = item.textContent;\r\n\r\n      console.log(text);\r\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((goods) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(goods, text))); //отправка данных от сервера из модуля\r\n    });\r\n  });\r\n  catalogModal.addEventListener(\"mouseleave\", () => {\r\n    catalogModal.style.display = \"\";\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"filterPrice\": () => (/* binding */ filterPrice),\n/* harmony export */   \"hotSailFilter\": () => (/* binding */ hotSailFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n  //фильтруем наши value\r\n\r\n  return goods.filter((goodsItem) => {\r\n    //ниже остаются товары у которых есть sale\r\n    //return goodsItem.sale === true;\r\n    //const result = value.charAt(0).toUpperCase() + value.slice(1);\r\n    return goodsItem.title.toLowerCase().includes(value.toLowerCase());\r\n  });\r\n};\r\nconst categoryFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category === value;\r\n  });\r\n};\r\nconst filterPrice = (goods, min, max) => {\r\n  return goods.filter((goodsItem) => {\r\n    if (min === \"\" && max === \"\") {\r\n      return goodsItem;\r\n    } else if (min !== \"\" && max !== \"\") {\r\n      return goodsItem.price > +min && goodsItem.price < +max;\r\n    } else if (min !== \"\" && max === \"\") {\r\n      return goodsItem.price > +min;\r\n    } else if (min === \"\" && max !== \"\") {\r\n      return goodsItem.price < +max;\r\n    }\r\n  });\r\n};\r\nconst hotSailFilter = (goods, value) => {\r\n  return goods.filter((goodsItem) => {\r\n    if (value) {\r\n      return goodsItem.sale === true;\r\n    } else {\r\n      return goodsItem;\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//в getData передаем str если есть строка в инпут поиска\r\n\r\nconst getData = (str) => {\r\n  return fetch(`\r\n  https://ozon-8dbe8-default-rtdb.firebaseio.com/goods.json\r\n  `).then((response) => response.json());\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst load = () => {\r\n  (0,_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((goods) => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(goods)); //отправка данных от сервера из модуля\r\n \r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = (cart) => {\r\n  return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify(cart),\r\n    headers: {\r\n      \"Content-type\": \"application/json; charset=UTF-8\",\r\n    },\r\n  }).then((res) => res.json());\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/priceFilter.js":
/*!************************************!*\
  !*** ./src/modules/priceFilter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst priceFilter = () => {\r\n  const minInput = document.getElementById(\"min\");\r\n  const maxInput = document.getElementById(\"max\");\r\n  const checkSale = document.getElementById(\"discount-checkbox\");\r\n  const checkMarker = document.querySelector(\".filter-check_checkmark\");\r\n  minInput.addEventListener(\"input\", () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((goods) =>\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.filterPrice)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSailFilter)(goods, checkSale.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      )\r\n    );\r\n  });\r\n  maxInput.addEventListener(\"input\", () => {\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((goods) =>\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.filterPrice)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSailFilter)(goods, checkSale.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      )\r\n    );\r\n  });\r\n  checkSale.addEventListener(\"change\", () => {\r\n    if (checkSale.checked) {\r\n      checkMarker.classList.add(\"checked\");\r\n    } else {\r\n      checkMarker.classList.remove(\"checked\");\r\n    }\r\n\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((goods) =>\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.filterPrice)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSailFilter)(goods, checkSale.checked),\r\n          minInput.value,\r\n          maxInput.value\r\n        )\r\n      )\r\n    );\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priceFilter);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/priceFilter.js?");

/***/ }),

/***/ "./src/modules/refreshCounter.js":
/*!***************************************!*\
  !*** ./src/modules/refreshCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst refreshCounter = () => {\r\n  const cartCounter = document.querySelector(\".counter\");\r\n  const cart = localStorage.getItem(\"cart\")\r\n    ? JSON.parse(localStorage.getItem(\"cart\"))\r\n    : [];\r\n  cartCounter.textContent = cart.length;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshCounter);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/refreshCounter.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n  //получаем конетйнер корзины наших товаров, в который передадим все карточки с товаром , по которым был клик\r\n  const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n\r\n  //перед получением нашего массива с товарами очищаем верстку\r\n  cartWrapper.innerHTML = \"\";\r\n  //проверяем длинну нашего массива и если он пуст тогда выводи параграф\r\n  if (goods.length === 0) {\r\n    cartWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      ` <div id=\"cart-empty\">Ваша корзина пока пуста</div>`\r\n    );\r\n  } else {\r\n    //перебор переданного массива\r\n    goods.forEach((goodsItem) => {\r\n      //передаем кусок верстки с карточкой товара, размещая из объекта атрибуты и текстовое содержимое\r\n      //beforeend помещает карточку товара перед закрывающим тегом контейнера\r\n      cartWrapper.insertAdjacentHTML(\r\n        \"beforeend\",\r\n        //category hoverImg id img price sale title\r\n        //у каждой карточки, у каждого объекта есть свой id\r\n        //именно по этому id при клике на кнопку мы сможем определить\r\n        //какой товар мы кликнули\r\n        //для этого на каждую карточку помещаем определенный атрибут\r\n        //по атрибуту мы сможем определять какой товар мы кликнули\r\n        ` \r\n    \r\n    \r\n\t\t\t\t\t\t\t\t<div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                \t${\r\n                    goodsItem.sale\r\n                      ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>'\r\n                      : \"\"\r\n                  }\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"card-img-top\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-image: url('${goodsItem.img}')\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-price\">${goodsItem.price} ₽</div>\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">Убрать из корзины</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n    \r\n    `\r\n      );\r\n    });\r\n  }\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _refreshCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refreshCounter */ \"./src/modules/refreshCounter.js\");\n\r\nconst renderGoods = (goods) => {\r\n  //получаем конетйнер наших товаров, в который передадим все карточки с товаром с сервера\r\n  const goodsWrapper = document.querySelector(\".goods\");\r\n  //setitem передаем два аргумента, первым аргументом\r\n  //он принимает название ключа которым мы назовем будущий контейнер,\r\n  //в который полчаем данные с сервера\r\n  //2 аргумент это массив - данные с сервера, переведнные в строку\r\n  localStorage.setItem(\"goods\", JSON.stringify(goods));\r\n  //перед получением нашего массива с товарами очищаем верстку\r\n  goodsWrapper.innerHTML = \"\";\r\n  //перебор переданного массива\r\n  goods.forEach((goodsItem) => {\r\n    //передаем кусок верстки с карточкой товара, размещая из объекта атрибуты и текстовое содержимое\r\n    //beforeend помещает карточку товара перед закрывающим тегом контейнера\r\n    goodsWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      //category hoverImg id img price sale title\r\n      //у каждой карточки, у каждого объекта есть свой id\r\n      //именно по этому id при клике на кнопку мы сможем определить\r\n      //какой товар мы кликнули\r\n      //для этого на каждую карточку помещаем определенный атрибут\r\n      //по атрибуту мы сможем определять какой товар мы кликнули\r\n      ` \r\n    \r\n    \t<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n\t\t\t\t\t\t\t\t<div class=\"card\" data-key=\"${goodsItem.id}\">\r\n                \t${\r\n                    goodsItem.sale\r\n                      ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>'\r\n                      : \"\"\r\n                  }\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"card-img-top\"\r\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-image: url('${goodsItem.img}')\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-price\">${goodsItem.price} ₽</div>\r\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\r\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n    \r\n    `\r\n    );\r\n  });\r\n  (0,_refreshCounter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n  const searcBtn = document.querySelector(\".search-btn\");\r\n  const searchInput = document.querySelector(\".search-wrapper_input\");\r\n  const valueInput = () => {\r\n    const eventValueInput = searchInput.value;\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((goods) =>\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(goods, eventValueInput))\r\n    ); //отправка данных от сервера из модуля\r\n  };\r\n  searchInput.addEventListener(\"input\", valueInput);\r\n  searcBtn.addEventListener(\"click\", valueInput);\r\n  searchInput.addEventListener(\"keydown\", function (e) {\r\n    if (e.keyCode === 13) {\r\n      // можете делать все что угодно со значением текстового поля\r\n      valueInput();\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;