// Задача. Есть массив products. 
// 1. Для каждого объекта в массиве products создать разметку
// 2. Отобразить только те продукты, цена которых больше 10000
// 3. Отобразить только те продукты, категория которых - phone


/*
    <div class="product">
        <h3> {имя продукта} </h3>
        <p> {категория продукта} </p>
        <p> {цена продукта} </p>
        <button>Купить</button>
    </div>
*/


const products = [
    {
        name: "Iphone 13",
        category: "phone",
        price: 15000
    },
    {
        name: "Iphone 14",
        category: "phone",
        price: 20000
    },
    {
        name: "Acer",
        category: "laptop",
        price: 40000
    },
    {
        name: "Asus",
        category: "laptop",
        price: 35000
    },
    {
        name: "Samsung",
        category: "TV",
        price: 27000
    },
    {
        name: "LG",
        category: "TV",
        price: 7000
    },
]
function creatElements(products){
const Divs = document.querySelector("section");
for (let i = 0; i < products.length; i++) {
  Divs.innerHTML += `<div class="product">
                        <h3>Название продукта: ${products[i].name}</h3>
                        <p>Kатегория продукта: ${products[i].category}</p>
                        <p>Цена продукта: ${products[i].price} </p>
                        <button>Купить</button>
                    </div>`;
}
}
creatElements(products)



function priceSort(products){
    const Divs = document.querySelector("section");
    for (let i = 0; i < products.length; i++) {
        if(products[i].price > 10000){
            Divs.innerHTML += `<div class="product">
                                    <h3>Название продукта: ${products[i].name}</h3>
                                    <p>Kатегория продукта: ${products[i].category}</p>
                                    <p>Цена продукта: ${products[i].price} </p>
                                    <button>Купить</button>
                              </div>`
        }
    }
    }
    // priceSort(products)


    function categorySort(products){
        const Divs = document.querySelector("section");
        for (let i = 0; i < products.length; i++) {
            if(products[i].category === "phone"){
                Divs.innerHTML += `<div class="product">
                                        <h3>Название продукта: ${products[i].name}</h3>
                                        <p>Kатегория продукта: ${products[i].category}</p>
                                        <p>Цена продукта: ${products[i].price} </p>
                                        <button>Купить</button>
                                  </div>`
            }
        }
        }
        
        // categorySort(products)
        