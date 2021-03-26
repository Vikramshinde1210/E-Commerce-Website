

//global
var products = [];
var cartItems = [];
var cart_n = document.getElementById("cart_n");
//Divs
var clothesDiv = document.getElementById("clothesDiv");
var shoesDiv = document.getElementById("shoesDiv");
var watchesDiv = document.getElementById("watchesDiv");
//information
var clothes = [
    {name:'clothes #1' ,price:10},{name:'clothes #2' ,price:11},{name:'clothes #3' ,price:12},{name:'clothes #4' ,price:12}
    ,{name:'clothes #5' ,price:12},{name:'clothes #6' ,price:12},{name:'clothes #7' ,price:12},{name:'clothes #8' ,price:12}
    ,{name:'clothes #9' ,price:12},{name:'clothes #10' ,price:12},{name:'clothes #11' ,price:12},{name:'clothes #12' ,price:12}
    
];
var shoes = [
    {name:'shoes #1' ,price:13},{name:'shoes #2' ,price:14},{name:'shoes #3' ,price:15}
    ,{name:'shoes #4' ,price:15},{name:'shoes #5' ,price:15},{name:'shoes 3' ,price:15}
];
var watches = [
    {name:'watch #1' ,price:16},{name:'watch #2' ,price:17},{name:'watch #3' ,price:18}
];
//HTML
function HTMLclothesProduct(con){
    let URL = `img/clothes/${con}.jpg`;
    let btn = `btnCloth${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card Image">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${clothes[con-1].name}</p>
                    <p class="card-text">Price: ${clothes[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-item-center">
                        <div class="btn-group ">
                            <button type="button" onclick="cart2('${clothes[con-1].name}''${clothes[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                <a href="cart.html" style="color:inherit">Buy</a>
                            </button>
                            <button id="${btn}" type="button" onclick="cart('${clothes[con-1].name}','${clothes[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                Add to cart
                            </button>

                        </div>     
                        <small class="text-muted">Free Shipping</small>  
                    </div>
                </div>   
            </div>
        </div>
    `
}
function HTMLshoesProduct(con){
    let URL = `img/shoes/${con}.jpg`;
    let btn = `btnShoes${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card Image">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${shoes[con-1].name}</p>
                    <p class="card-text">Price: ${shoes[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-item-center">
                        <div class="btn-group ">
                            <button type="button" onclick="cart2('${shoes[con-1].name}''${shoes[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                <a href="cart.html" style="color:inherit">Buy</a>
                            </button>
                            <button id="${btn}" type="button" onclick="cart('${shoes[con-1].name}','${shoes[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                Add to cart
                            </button>

                        </div>     
                        <small class="text-muted">Free Shipping</small>  
                    </div>
                </div>   
            </div>
        </div>
    `
}
function HTMLwatchesProduct(con){
    let URL = `img/watches/${con}.jpg`;
    let btn = `btnWatch${con}`;
    return `
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card Image">
                <div class="card-body">
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <i style="color:orange;" class="fa fa-star" ></i>
                    <p class="card-text">${watches[con-1].name}</p>
                    <p class="card-text">Price: ${watches[con-1].price}.00</p>
                    <div class="d-flex justify-content-between align-item-center">
                        <div class="btn-group ">
                            <button type="button" onclick="cart2('${watches[con-1].name}''${watches[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                <a href="cart.html" style="color:inherit">Buy</a>
                            </button>
                            <button id="${btn}" type="button" onclick="cart('${watches[con-1].name}','${watches[con-1].price}','${URL}','${con}','${btn}')" class="btn btn-sm btn-outline-secondary">
                                Add to cart
                            </button>

                        </div>     
                        <small class="text-muted">Free Shipping</small>  
                    </div>
                </div>   
            </div>
        </div>
    `
}
//animation
function animation(){
    // const toast = swal.mixin({
    //     toast:true,
    //     position:'top-end',
    //     showConfirmButton:false,
    //     timer:1000

    // });
    // toast({
    //     type:'success',
    //     title:'Added to the cart'
    // });
    alert("Added to the cart");

}
//cart function
function cart(name,price,url,con,btncart){
    var item = {
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
        
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display ="none";
    animation();
}
function cart2(name,price,url,con,btncart){
    var item = {
        name:name,
        price:price,
        url:url
    }
    cartItems.push(item);
    let storage = JSON.parse(localStorage.getItem("cart"));
    if (storage==null) {
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        products.push(item);
        localStorage.setItem("cart",JSON.stringify(products));
        
    }
    products = JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
    document.getElementById(btncart).style.display ="none";
    animation();
}
//render
function render(){
    for (let index = 1; index <= 12; index++) {
        clothesDiv.innerHTML+=`${HTMLclothesProduct(index)}`;
        
    }
    for (let index = 1; index <= 6; index++) {
        shoesDiv.innerHTML+=`${HTMLshoesProduct(index)}`;
        
    }
    for (let index = 1; index <= 3; index++) {
        watchesDiv.innerHTML+=`${HTMLwatchesProduct(index)}`;
        
    }
    if (localStorage.getItem("cart")==null) {
        
    } else {
        products = JSON.parse(localStorage.getItem("cart"));
        cart_n.innerHTML = `[${products.length}]`;
    }
}





























