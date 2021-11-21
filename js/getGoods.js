const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://internet-platform-15a6d-default-rtdb.firebaseio.com/db.json')
            .then((res) => res.json())
            .then((data) => { console.log(data) }
            )
    }


    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            getData()
        })
    })
    localStorage.setItem('goods', JSON.stringify({ name: 'all' }))
    const goods = JSON.parse(localStorage.getItem('goods'))
}

getGoods()