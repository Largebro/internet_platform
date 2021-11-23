const sendForm = () => {
    const cartArr = JSON.parse(localStorage.getItem('cart'))
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            cart: cartArr,
            name: '',
            phone: ''
        })
    }).then(() => {
        localStorage.removeItem('cart')
        cart.style.display = ''
    })
}


const modalForm = () => {
    const modalForm = document.querySelector('.modal-form')
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault()
        sendForm()

    })
}

export { modalForm, sendForm }