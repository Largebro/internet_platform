import addToCart from "./addToCart";
import renderCartDoods from "./renderCartDoods";

const cart = () => {
    const cartBtn = document.querySelector('.button-cart')
    const modal = document.getElementById('modal-cart')
    const modalClose = modal.querySelector('.modal-close')
    const goodsContainer = document.querySelector('.long-goods-list')



    cartBtn.addEventListener('click', () => { //рендер товара на основании функции addToCart
        const cartArray = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
        renderCartDoods(cartArray)
        modal.style.display = 'flex'
    })

    modalClose.addEventListener('click', () => {
        modal.style.display = ''
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.modal') && e.target.classList.contains('overlay')) {
            modal.style.display = ''
        }
    })

    window.addEventListener('keydown', (e) => { //при клике на esc закрыть окно корзины
        if (e.key === 'Escape') {
            modal.style.display = ''
        }
    })

    if (goodsContainer) {
        goodsContainer.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart')) { //closest возвращает близжайший родительский элемент
                const buttonToCart = e.target.closest('.add-to-cart')
                const goodId = buttonToCart.dataset.id // берем id  всех детей 
                addToCart(goodId)
            }
        })

    }

}
export default cart;