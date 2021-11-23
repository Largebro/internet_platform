import renderCartDoods from "./renderCartDoods"


const deleteCartItem = (id) => { //удаляем из корзины товары
    const cart = JSON.parse(localStorage.getItem('cart'))

    const newCart = cart.filter(good => {
        return good.id !== id
    })
    localStorage.setItem('cart', JSON.stringify(newCart))
    renderCartDoods(JSON.parse(localStorage.getItem('cart')))
}

const plusCartItem = (id) => { // прибалляем кол-во товара в корзине и меняем цену
    const cart = JSON.parse(localStorage.getItem('cart'))

    const newCart = cart.map(good => {
        if (good.id === id) {
            good.count++
        }
        return good
    })
    localStorage.setItem('cart', JSON.stringify(newCart))
    renderCartDoods(JSON.parse(localStorage.getItem('cart')))
}

const minusCartItem = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart'))

    const newCart = cart.map(good => {
        if (good.id === id) {
            if (good.count > 0)
                good.count--

        }
        return good
    })
    localStorage.setItem('cart', JSON.stringify(newCart))
    renderCartDoods(JSON.parse(localStorage.getItem('cart')))
}
export { deleteCartItem, plusCartItem, minusCartItem }