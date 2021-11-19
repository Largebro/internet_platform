const cart = function () {
    const cartBtn = document.querySelector('.button-cart')
    const modal = document.getElementById('modal-cart')
    const modalClose = modal.querySelector('.modal-close')


    cartBtn.addEventListener('click', () => {
        modal.style.display = "flex"
    })

    modalClose.addEventListener('click', () => {
        modal.style.display = ''
    })
}
console.log(cart())