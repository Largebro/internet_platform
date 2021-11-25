import cart from "./cart";
import { deleteCartItem, plusCartItem, minusCartItem } from "./changeCart";



const renderCartDoods = (goods) => { //рендерим новую корзину
    const total = document.querySelector('.card-table__total')
    const cartTable = document.querySelector('.cart-table__goods')
    cartTable.innerHTML = ''
    let totalPrice = 0;
    goods.forEach(good => {
        const tr = document.createElement('tr')
        totalPrice += (+good.price * + good.count)

        tr.innerHTML = `
                    <td>${good.name}</td>
					<td>${good.price}$</td>
					<td><button class="cart-btn-minus"">-</button></td>
	    			<td>${good.count}</td>
					<td><button class="cart-btn-plus"">+</button></td>
					<td>${+good.price * + good.count}$</td> 
					<td><button class="cart-btn-delete"">x</button></td>
    `
        cartTable.append(tr) // добавляем в конец строку таблицы
        total.textContent = totalPrice      //общая цена
        tr.addEventListener('click', (e) => {
            if (e.target.classList.contains('cart-btn-minus')) { //contains ищет в classList e.target  класс
                minusCartItem(good.id)

            } else if (e.target.classList.contains('cart-btn-plus')) {
                plusCartItem(good.id)

            } else if (e.target.classList.contains('cart-btn-delete')) {
                deleteCartItem(good.id)
            }

        })
    });


}
export default renderCartDoods;