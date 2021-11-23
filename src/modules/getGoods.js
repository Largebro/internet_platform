import renderGoods from "./renderGoods";


const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');
    const more = document.querySelector('.more')

    const getData = (value, category) => {
        fetch('https://internet-platform-15a6d-default-rtdb.firebaseio.com/db.json')
            .then((res) => res.json())
            .then((data) => {
                const array = category
                    ? data.filter(item => item[category] === value) // если категория совпадает с линком который  ниже вывести необходимое
                    : data; // у all нету категории, поэтому выводит все
                localStorage.setItem('goods', JSON.stringify(array))

                window.location.pathname !== "/goods.html"  //если не равно страницы с товаром перекинь и сделай рендер с фильрованного фильтра
                    ? window.location.href = "/goods.html"
                    : renderGoods(array)

            })
    }


    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const linkValue = link.textContent;
            const category = link.dataset.field;
            getData(linkValue, category);

        })
    })
    if (localStorage.getItem('goods') && window.location.pathname === 'goods.html') {
        renderGoods(JSON.parse(localStorage.getItem('goods')))
    }
    if (more) {
        more.addEventListener('click', (e) => { //обработка кнопки "показать все" 
            e.preventDefault()
            getData();

        })
    }
}

export default getGoods;
