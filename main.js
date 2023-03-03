
let data;
const products_Container =document.getElementById('products_Container');






function productCardCreator (i){
  products_Container.innerHTML+= `
  <div class="product_Card" id=${data[i].id}>
      <img src="${data[i].img_src}" alt="product">
      <div class="description">
        <span>${data[i].brand}</span>
        <h5>${data[i].title}</h5>
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h4 class="price">${data[i].price} EGP</h4>
        <button id="cartButton" onclick="AddToCart(this)">
            <i class="fa fa-shopping-cart cart" style="  color: #088178; "></i>

          </button>
      </div>
    </div>
  `

}

function LoopShowAllProducts(){
  
  for(let i=0; i<8; i++){
   productCardCreator(i)

 }
  
};



function fetchData(){
  fetch('/test.json')
.then(res=> res.json())
.then( (res)=>{
  data = res;
  LoopShowAllProducts()


})
}

// implement try catch for fetch

fetchData()

let cartData =[];

function checkCartData(){
  if(localStorage.getItem('cart')){
    cartData =JSON.parse(localStorage.getItem('cart'))
    console.log(`Current Cart Data is: ${cartData}`)

  }

}
window.onload = checkCartData()

function AddToCart(prod){
  let prodId = (prod.parentElement.parentElement.id);
  cartData.push(prodId)
  localStorage.setItem('cart', JSON.stringify(cartData))
  console.log(`Added product with id ${prodId}`)
  console.log(`Current Cart Data is: ${cartData}`)
}


/************************
 * IMPLEMENT SEARCH BAR *
 ************************/
