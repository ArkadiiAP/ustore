let itemsAll = document.getElementsByClassName('product');
let defItems = document.querySelectorAll('.product');
let items;
let pages = document.getElementsByClassName('paginat');
let countItems = 0;
for(let i=0; i<itemsAll.length; i++){
    itemsAll[i].setAttribute('name', 'basic');
    itemsAll[i].setAttribute('name1', 'basic');
}
for(let i=0; i<6; i++){
    itemsAll[i].style.display = "flex";
}
for(let i=6; i<itemsAll.length;i++){
    itemsAll[i].style.display = "none";
}
let items_on_page = 6;

function changePage(n){
    for(let i=0; i<pages.length; i++){
        if(pages[i].getAttribute('class') == 'paginat active'){
            pages[i].setAttribute('class', 'paginat');
        }
    }
    pages[n-1].setAttribute('class', 'paginat active');
    items = [];
    for(let i=0; i<itemsAll.length;i++){
        if((itemsAll[i].getAttribute('name') == 'active'||itemsAll[i].getAttribute('name') == 'basic')&&(itemsAll[i].getAttribute('name1') == 'active'||itemsAll[i].getAttribute('name1') == 'basic')){
            items.push(itemsAll[i]);
        }
    }
    switch (n) {
        case 1:
            if(items.length<6){
                items_on_page = items.length;
            }else items_on_page = 6;
            for(let i=0; i<items.length; i++){
                if(items[i].style.display == "flex"){
                    items[i].style.display = "none";
                }
            }
            for(let i=0; i<items_on_page; i++){
                items[i].style.display = "flex";
            }
            break;    
        case 2:
            for(let i=0; i<items.length; i++){
                if(items[i].style.display == "flex"){
                    items[i].style.display = "none";
                }
            }
            for(let i=items_on_page; i<items_on_page*2; i++){
                items[i].style.display = "flex";
            }
            break;
        case 3:
            for(let i=0; i<items.length; i++){
                if(items[i].style.display == "flex"){
                    items[i].style.display = "none";
                }
            }
            for(let i=items_on_page*2; i<items_on_page*3; i++){
                items[i].style.display = "flex";
            }
            break;
        case 4:
            for(let i=0; i<items.length; i++){
                if(items[i].style.display == "flex"){
                    items[i].style.display = "none";
                }
            }
            for(let i=items_on_page*3; i<items_on_page*4; i++){
                items[i].style.display = "flex";
            }
            break;
        case 5:
            for(let i=0; i<items.length; i++){
                if(items[i].style.display == "flex"){
                    items[i].style.display = "none";
                }
            }
            for(let i=items_on_page*4; i<itemsAll.length; i++){
                items[i].style.display = "flex";
            }
            break;
    }
}

let brand = document.getElementsByClassName('brand');
let check_brand_LS = document.getElementById('LS');
let check_brand_Salewa = document.getElementById('Salewa');
let check_brand_TNF = document.getElementById("TNF");
let check_brand_Salomon = document.getElementById('Salomon');
function filterBrand(){
    if(check_brand_LS.checked){
        for(i=0;i<brand.length;i++){
            if(brand[i].innerHTML == 'La Sportiva'){
                brand[i].parentNode.setAttribute('name', 'active');
            }else if(itemsAll[i].getAttribute('name') != 'active'){
                brand[i].parentNode.setAttribute('name', 'hidden');
            }
        }
    }else if(!check_brand_Salewa.checked&&!check_brand_Salomon.checked&&!check_brand_TNF.checked){
        for(i=0;i<brand.length;i++){
            brand[i].parentNode.setAttribute('name', 'basic');
        }
    }else if(check_brand_Salewa.checked||check_brand_Salomon.checked||check_brand_TNF.checked){
        for(i=0;i<brand.length;i++){
            if(brand[i].innerHTML == 'La Sportiva'){
                brand[i].parentNode.setAttribute('name', 'hidden');
            }
        }
    }
    if(check_brand_Salewa.checked){
        for(i=0;i<brand.length;i++){
            if(brand[i].innerHTML == 'Salewa'){
                brand[i].parentNode.setAttribute('name', 'active');
            }else if(itemsAll[i].getAttribute('name') != 'active'){
                brand[i].parentNode.setAttribute('name', 'hidden');
            }
        }
    }else if(check_brand_LS.checked||check_brand_Salomon.checked||check_brand_TNF.checked){
        for(i=0;i<brand.length;i++){
            if(brand[i].innerHTML == 'Salewa'){
                brand[i].parentNode.setAttribute('name', 'hidden');
            }
        }
    }
    if(check_brand_Salomon.checked){
        for(i=0;i<brand.length;i++){
            if(brand[i].innerHTML == 'Salomon'){
                brand[i].parentNode.setAttribute('name', 'active');
            }else if(itemsAll[i].getAttribute('name') != 'active'){
                brand[i].parentNode.setAttribute('name', 'hidden');
            }
        }
    }else if(check_brand_Salewa.checked||check_brand_LS.checked||check_brand_TNF.checked){
        for(i=0;i<brand.length;i++){
            if(brand[i].innerHTML == 'Salomon'){
                brand[i].parentNode.setAttribute('name', 'hidden');
            }
        }
    }
    if(check_brand_TNF.checked){
        for(i=0;i<brand.length;i++){
            if(brand[i].innerHTML == 'The North Face'){
                brand[i].parentNode.setAttribute('name', 'active');
            }else if(itemsAll[i].getAttribute('name') != 'active'){
                brand[i].parentNode.setAttribute('name', 'hidden');
            }
        }
    }else if(check_brand_Salewa.checked||check_brand_Salomon.checked||check_brand_LS.checked){
        for(i=0;i<brand.length;i++){
            if(brand[i].innerHTML == 'The North Face'){
                brand[i].parentNode.setAttribute('name', 'hidden');
            }
        }
    }
    filter();
}

let liters = document.getElementsByClassName('liters');
let check10 = document.getElementById('10_19');
let check20 = document.getElementById('20_29');
let check30 = document.getElementById('30_39');
let check40 = document.getElementById('40');
function filterLiters() {
    if(check10.checked){
        for(i=0;i<liters.length;i++){
            if(Number(liters[i].innerHTML)<20){
                liters[i].parentNode.setAttribute('name1', 'active');
            }else if(Number(liters[i].innerHTML)>=20&&!check20.checked&&!check30.checked&&!check40.checked){
                liters[i].parentNode.setAttribute('name1', 'hidden');
            }
        }
    }else if(!check10.checked&&!check20.checked&&!check30.checked&&!check40.checked){
        for(i=0;i<liters.length;i++){
            liters[i].parentNode.setAttribute('name1', 'basic');
        }
    }else if(check20.checked||check30.checked||check40.checked){
        for(i=0;i<liters.length;i++){
            if(Number(liters[i].innerHTML)>=10&&Number(liters[i].innerHTML)<20){
                liters[i].parentNode.setAttribute('name1', 'hidden');
            }
        }
    }

    if(check20.checked){
        for(i=0;i<itemsAll.length;i++){
            if(itemsAll[i].getAttribute('value')>=20&&itemsAll[i].getAttribute('value')<30){
                itemsAll[i].setAttribute('name1', 'active');
            }else if(itemsAll[i].getAttribute('value')>=30||itemsAll[i].getAttribute('value')<20&&!check10.checked&&!check40.checked&&!check30.checked){
                itemsAll[i].setAttribute('name1', 'hidden');
            }
        }
    }else if(!check10.checked&&!check20.checked&&!check30.checked&&!check40.checked){
        for(i=0;i<itemsAll.length;i++){
            itemsAll[i].setAttribute('name1', 'basic');
        }
    }else if(check10.checked||check30.checked||check40.checked){
        for(i=0;i<itemsAll.length;i++){
            if(itemsAll[i].getAttribute('value')>=20&&itemsAll[i].getAttribute('value')<30){
                itemsAll[i].setAttribute('name1', 'hidden');
            }
        }
    }

    if(check30.checked){
        for(i=0;i<itemsAll.length;i++){
            if(itemsAll[i].getAttribute('value')>=30&&itemsAll[i].getAttribute('value')<40){
                itemsAll[i].setAttribute('name1', 'active');
            }else if((itemsAll[i].getAttribute('value')<30||itemsAll[i].getAttribute('value')>=40)&&!check10.checked&&!check20.checked&&!check40.checked){
                itemsAll[i].setAttribute('name1', 'hidden');
            }
        }
    }else if(!check10.checked&&!check20.checked&&!check30.checked&&!check40.checked){
        for(i=0;i<itemsAll.length;i++){
            itemsAll[i].setAttribute('name1', 'basic');
        }
    }else if(check20.checked||check10.checked||check40.checked){
        for(i=0;i<itemsAll.length;i++){
            if(itemsAll[i].getAttribute('value')>=30&&itemsAll[i].getAttribute('value')<40){
                itemsAll[i].setAttribute('name1', 'hidden');
            }
        }
    }

    if(check40.checked){
        for(i=0;i<itemsAll.length;i++){
            if(itemsAll[i].getAttribute('value')>=40){
                itemsAll[i].setAttribute('name1', 'active');
            }else if(itemsAll[i].getAttribute('value')<40&&!check10.checked&&!check20.checked&&!check30.checked){
                itemsAll[i].setAttribute('name1', 'hidden');
            }
        }
    }else if(!check10.checked&&!check20.checked&&!check30.checked&&!check40.checked){
        for(i=0;i<itemsAll.length;i++){
            itemsAll[i].setAttribute('name1', 'basic');
        }
    }else if(check20.checked||check30.checked||check10.checked){
        for(i=0;i<itemsAll.length;i++){
            if(itemsAll[i].getAttribute('value')>=40){
                itemsAll[i].setAttribute('name1', 'hidden');
            }
        }
    }
    filter();
}

//
function filter(){
    for(i=0;i<itemsAll.length;i++){
        if(itemsAll[i].getAttribute('name1') == 'hidden'||itemsAll[i].getAttribute('name') == 'hidden'){
            itemsAll[i].style.display = 'none';
        }else{
            itemsAll[i].style.display = 'flex';
        }
    }
    countItems = 0;
    for(i=0;i<itemsAll.length;i++){
        if((itemsAll[i].getAttribute('name') == 'active'||itemsAll[i].getAttribute('name') == 'basic')&&(itemsAll[i].getAttribute('name1') == 'active'||itemsAll[i].getAttribute('name1') == 'basic')){
            countItems++;
        }
    }
    let showcount = document.querySelector('#count');
    showcount.innerHTML = `Showing ${countItems} products`;
    let countPages = countItems/6;
    let page = document.getElementsByClassName('paginat');
    for(let i=0; i<page.length;i++){
        page[i].setAttribute('name', 'nonactive');
    }
    for(let i=0; i<countPages; i++){
        page[i].setAttribute('name', 'active');
    }
    for(let i=0; i<page.length; i++){
        if(page[i].getAttribute('name') == 'active'){
            page[i].style.display = 'block';
        }else{
            page[i].style.display = 'none';
        }
    }
    changePage(1);
}

//фильтры
let flagCap = 0;
let flagBrand = 0;
let capacity = document.querySelector('.capacity');
let fbrand = document.querySelector('.fbrand');
function hideCap(){
    if(flagCap == 0){
        flagCap = 1;
        capacity.style.display = 'none';
    }else if(flagCap == 1){
        flagCap = 0;
        capacity.style.display = 'block';
    }
}
function hideBrand(){
    if(flagBrand == 0){
        flagBrand = 1;
        fbrand.style.display = 'none';
    }else if(flagBrand == 1){
        flagBrand = 0;
        fbrand.style.display = 'block';
    }
}

let descript = document.querySelectorAll('.descript span');
for(let i=0; i<descript.length; i++){
    descript[i].innerHTML = 'Backpack is so functional and useful for your outdoor activities in the mountains and to take it to university or work since it has special compartments for books, notebooks, pencils, tablet, and even the laptop.';
}



let cartCont = document.querySelector('.dropcart');
function addEvent(elem, type, handler){
    if(elem.addEventListener){
        elem.addEventListener(type, handler, false);
    }else {
        elem.attachEvent('on'+type, function(){ handler.call( elem ); });
    }
    return false;
}

function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o){
    localStorage.setItem(`cart`, JSON.stringify(o));
    return false;
}

//добавление товара в корзину
function addToCart(e){
    this.disabled = true; // блокируем кнопку на время операции с корзиной
    var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
        parentBox = this.parentNode.parentNode, // родительский элемент кнопки "Добавить в корзину"
        itemId = this.getAttribute('data-id'), // ID товара
        itemTitle = parentBox.querySelector('.title').innerHTML, // название товара
        itemPrice = Number(parentBox.querySelector('.price').innerHTML).toFixed(2), // стоимость товара
        itemImg = parentBox.querySelector('img'),
        itemImage = itemImg.getAttribute('src');
    if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
        cartData[itemId][4] += 1;
    }else{ // если товара в корзине еще нет, то добавляем в объект
        cartData[itemId] = [itemId, itemImage, itemTitle, itemPrice, 1];
    }
    if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
        this.disabled = false; // разблокируем кнопку после обновления LS
    }
   return false;
}

let not_avaliable = document.querySelectorAll('.avaliable');
for(var i = 0; i < itemsAll.length; i++){
    addEvent(itemsAll[i].querySelector('.add_item'), 'click', addToCart);
    if(not_avaliable[i].innerHTML == 'Not avaliable'){
        itemsAll[i].querySelector('.add_item').disabled = true;
    }
}

//показываем содержимое корзины
addEvent(document.querySelector(".cart"), 'mouseover', openCart);
function openCart(e){
    cartData = getCartData(), // вытаскиваем все данные корзины
    totalItems = '',
    totalPrice = 0;
    // если что-то в корзине уже есть, начинаем формировать данные для вывода
    if(cartData !== null){
        totalItems = '<ul class="shopping_list">';
        for(var items in cartData){
            totalItems += `<li class="shopping_list_li" data_id="${cartData[items][0]}">
                                <div>
                                    <img src="${cartData[items][1]}" alt="backpack" height='50'>
                                </div>
                                <div>
                                    <div>
                                        <p>${cartData[items][2]}</p>
                                    </div>
                                    <div>
                                        <p>${cartData[items][4]} x ${cartData[items][3]}</p>
                                    </div>
                                </div>
                                <button type="button" class="dropcart_remove" onclick="remove(this)">x</button>
                            </li>`;
            totalPrice += Number(cartData[items][4]*cartData[items][3]);
        }
        totalItems += `<div class='total'>Total: ${totalPrice.toFixed(2)}</div>`
        totalItems += `<button type="button">CHECKOUT</button>`
        totalItems += '</ul>';
        cartCont.innerHTML = totalItems;
    }else{
      // если в корзине пусто, то сигнализируем об этом
        cartCont.innerHTML = "It's empty now";
    }
    return false;
}


//удаление товара из корзины
function remove(n){
    n.disabled = true;
    var cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
    let itemId = n.parentNode.getAttribute('data_id');
    if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
        delete cartData[itemId];
        if(!cartData.hasOwnProperty(itemId)){
            localStorage.clear();
        }
        let remove = document.querySelector('.shopping_list_li');
        for(let i=0; i<remove.length; i++){
            if(remove[i].getAttribute('data_id') == itemId){
            remove[i].parentNode.removeChild(remove[i]);
            }
        }
    }else{ // если товара в корзине еще нет, то добавляем в объект
        delete cartData;
    }
    if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
        n.disabled = false; // разблокируем кнопку после обновления LS
        openCart();
    }
    return false;
}


//Сортировка по дефолу. цена мин-макс. макс-мин
function sort(){
    let price = document.querySelectorAll('.product');
    let pricearr = [];
    let parent = price[0].parentNode;
    let defaultItems = [];
    let defUl = defItems[0].parentNode;
    if(this.options[this.selectedIndex].value == 0){
        for(let i=0; i<defItems.length; i++){
            defaultItems.push(defUl.removeChild(defItems[i]));
        }
        defaultItems.forEach(function(node){
            parent.appendChild(node);
        })
        changePage(1);
    }else if(this.options[this.selectedIndex].value == 1){ 
        for(let i=0; i<price.length; i++){
            pricearr.push(parent.removeChild(price[i]));
        }
        pricearr.sort(function(nodeA, nodeB){
            var A = Number(nodeA.querySelector('.price').innerHTML);
            var B = Number(nodeB.querySelector('.price').innerHTML);
            if(A > B) return 1;
            if(A < B) return -1;
            return 0;
        })
        .forEach(function(node){
            parent.appendChild(node);
        });
        changePage(1);
    }else if(this.options[this.selectedIndex].value == 2){
        for(let i=0; i<price.length; i++){
            pricearr.push(parent.removeChild(price[i]));
        }
        pricearr.sort(function(nodeA, nodeB){
            var A = Number(nodeA.querySelector('.price').innerHTML);
            var B = Number(nodeB.querySelector('.price').innerHTML);
            if(A < B) return 1;
            if(A > B) return -1;
            return 0;
        })
        .forEach(function(node){
            parent.appendChild(node);
        });
        changePage(1);
    }
}
