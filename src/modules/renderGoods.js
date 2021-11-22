const renderGoods = (array) => {

    const goodsContainer = document.querySelector('.long-goods-list');

    goodsContainer.innerHTML = ''; //делаем контейнер пустым чтобы потом наполнить карточки согласно фильтру
    array.forEach(item => {
        const goodBlock = document.createElement('div'); // создаем div

        goodBlock.classList.add('col-lg-3'); //создаем 2 класса которые были указаны в карточках html
        goodBlock.classList.add('col-sm-6');

        //если нету лейбла то ставим d-node
        goodBlock.innerHTML = `
        <div class="goods-card">
            <span class="label ${item.label ? null : 'd-none'}">${item.label}</span>  
            <img src="db/${item.img}" alt="${item.name}" class="goods-image"> 
            <h3 class ="goods-title">${item.name}</h3>
            <p class ="goods-description">${item.description}</p>
            <button class ="button goods-card-btn add-to-cart" data-id="${item.id}">
            <span class ="button-price">$${item.price}</span>
            </button>
        </div>
        `; // у каждого иттерируемого элемента меняет значения

        goodsContainer.append(goodBlock); // добавляем в конце контейнера блоки
    })
}

export default renderGoods;