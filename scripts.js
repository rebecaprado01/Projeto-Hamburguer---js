const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonShowMapALL = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')


function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency', currency: 'BRL',
     })

     return newValue 
}

function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
        myLi += `
        <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>
    `
    })

    list.innerHTML = myLi

}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    showAll(newPrices)

}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
        <li>
        <p>O valor total dos itens é R$ ${formatCurrency(totalValue)}</p>
        </li>
`

    console.log(totalValue)

}

function filterAllItems() {
    const filterJustVegans = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegans)
}



buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonShowMapALL.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)










