const addToCart = (id) => { //заносим в корзину
    const goods = JSON.parse(localStorage.getItem('goods'))
    const clickedGood = goods.find(good => good.id === id) // ищем совпадения по id
    const cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []
    if (cart.some(good => good.id === clickedGood.id)) {//если ли товар в корзине some(ищет хоть 1событие)
        cart.map(good => {
            if (good.id === clickedGood.id) { //если в корзине уже есть этот товар увеличиваем
                good.count++
            }
            return good
        })
    } else {
        clickedGood.count = 1
        cart.push(clickedGood)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export default addToCart;