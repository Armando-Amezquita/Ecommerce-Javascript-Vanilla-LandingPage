const navbarEmail = document.querySelector('.navbar-email');
const hambuguerMenu = document.querySelector('.menu');
const navbarShoppingCar = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideMenu = document.querySelector('.product-detail');
const selectProductDetail = document.querySelector('#selectProductDetail');
const productDetailClosed = document.querySelector('.product-detail-close');

navbarEmail.addEventListener('click', toggleNavbarMenu);
hambuguerMenu.addEventListener('click', togglehambuguerMenu);
navbarShoppingCar.addEventListener('click', toggleCarMenu);
productDetailClosed.addEventListener('click', closedSelectProductDetail);


function toggleNavbarMenu(){
    // desktopMenu.classList.toggle('activeDesktopMenu');
    const navbarCar = asideMenu.classList.contains('inactive');
    closedSelectProductDetail();
    if(!navbarCar){
        asideMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function togglehambuguerMenu(){
    const aside = asideMenu.classList.contains('inactive');

    closedSelectProductDetail();
    if(!aside){
        asideMenu.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
    // mobileMenu.classList.add('activeHambuguerMenu');
    // if(mobileMenu.classList.add('activeHambuguerMenu')){
    //     mobileMenu.classList.remove('hiddenHambuguerMenu');
    //     console.log('auqi')
    // }
}

function toggleCarMenu(){
    const mobile = mobileMenu.classList.contains('inactive');
    const desktop = desktopMenu.classList.contains('inactive');

    closedSelectProductDetail();
    if(!mobile){
        mobileMenu.classList.add('inactive');
    }
    if(!desktop){
        desktopMenu.classList.add('inactive');
    }
    
    asideMenu.classList.toggle('inactive');
    // if(!mobile){
    //     console.log('aqui')
    //     mobileMenu.classList.add('hiddenHambuguerMenu');
    //     mobileMenu.classList.toggle('activeHambuguerMenu');
    // }
}

const productList = [
    {
        name: 'Bike',
        price: 120,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: 'Computer',
        price: 2020,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        name: 'Cellphone',
        price: 500,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
];

function renderListProducts (listProducts){
    for (const product of listProducts) {
        const cardsContainer = document.querySelector('.cards-container');
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click', openSelectProductDetail)
    
        const imageProductCard = document.createElement('img');
        imageProductCard.setAttribute('src', product.img);
    
        const cardProductInfo = document.createElement('div');
        cardProductInfo.classList.add('product-info');
    
        const containerProductInfo = document.createElement('div');
    
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = `$ ${product.price}`;
    
        containerProductInfo.appendChild(productInfoPrice);
        containerProductInfo.appendChild(productInfoName);
    
        const productInfoFigure = document.createElement('figure');
        const figureImage = document.createElement('img');
        figureImage.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(figureImage);
    
        cardProductInfo.appendChild(containerProductInfo);
        cardProductInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(imageProductCard);
        productCard.appendChild(cardProductInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderListProducts(productList);

function openSelectProductDetail(){
    selectProductDetail.classList.remove('inactive');
    asideMenu.classList.add('inactive');
}


function closedSelectProductDetail(){
    selectProductDetail.classList.add('inactive');
}