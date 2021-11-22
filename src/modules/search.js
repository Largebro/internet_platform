import renderGoods from "./renderGoods";


const search = () => {
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')


    const getData = value => {
        fetch('https://internet-platform-15a6d-default-rtdb.firebaseio.com/db.json')
            .then((res) => res.json())
            .then((data) => {
                const array = data.filter(el => el.name.toLowerCase().includes(value))
                console.log(array)
                localStorage.setItem('goods', JSON.stringify(array))


                window.location.pathname !== "/goods.html"  //если не равно страницы с товаром перекинь и сделай рендер с фильрованного фильтра
                    ? window.location.href = "/goods.html"
                    : renderGoods(array)

            })
    }

    searchBtn.addEventListener('click', () => {
        getData(input.value)
    })

}
export default search;