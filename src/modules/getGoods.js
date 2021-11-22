const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('https://internet-platform-15a6d-default-rtdb.firebaseio.com/db.json')
            .then((res) => res.json())
            .then((data) => {
                const array = data.filter(())
                localStorage.setItem('goods', JSON.stringify(data))
            }
            )
    }


    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const linkValue = link.textContent;
            console.log(linkValue);
            getData()

        })
    })

    const goods = JSON.parse(localStorage.getItem('goods'))
}

export default getGoods;