import addToCart from "./modules/addToCart";
import cart from "./modules/cart"
import { deleteCartItem, plusCartItem, minusCartItem } from "./modules/changeCart";
import getGoods from "./modules/getGoods"
import renderCartDoods from "./modules/renderCartDoods";
import renderGoods from "./modules/renderGoods";
import search from "./modules/search"
import { modalForm, sendForm } from "./modules/sendForm";

cart();
getGoods();
search();
renderGoods;
addToCart;
deleteCartItem;
renderCartDoods;
plusCartItem;
minusCartItem;
modalForm;
sendForm;