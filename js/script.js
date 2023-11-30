// open and close cart
let openShopping = document.querySelector("#cart-product");
let cartProductDiv = document.querySelector(".cart");
let closeShopping = document.querySelector("#closecart");
let allProductsDiv = document.querySelector(".product-1");
let navBar = document.querySelector("#navBar-1");

openShopping.addEventListener("click", () => {
  allProductsDiv.style.display = "none";
  cartProductDiv.style.left = "7%";
  navBar.style.display = "none";
});
closeShopping.addEventListener("click", () => {
  allProductsDiv.style.display = "block";
  cartProductDiv.style.left = "100%";
  navBar.style.display = "block";
});

//// Draw Products //////
let allProducts = document.querySelector("#products");

let products = [
  {
    id: 1,
    title: "Nike Air Max 270",
    price: 200,
    offer: "25% off",
    oldPrice: 534,
    image: "images/image Product (1).png",
  },
  {
    id: 2,
    title: "Nike Air Max 250 ",
    price: 220,
    offer: "25% off",
    oldPrice: 300,
    image: "images/image Product (2).png",
  },
  {
    id: 3,
    title: "Nike Air Max 250 ",
    price: 230,
    offer: "25% off",
    oldPrice: 330,
    image: "images/image Product (3).png",
  },
  {
    id: 4,
    title: "Nike Bag 250 ",
    price: 250,
    offer: "25% off",
    oldPrice: 370,
    image: "images/image Product (4).png",
  },
  {
    id: 5,
    title: "Nike Air Max 250 ",
    price: 250,
    offer: "25% off",
    oldPrice: 377,
    image: "images/image Product (5).png",
  },
  {
    id: 6,
    title: "Nike Bag 250 ",
    price: 300,
    offer: "25% off",
    oldPrice: 400,
    image: "images/image Product (6).png",
  },
  {
    id: 7,
    title: "Nike Air Max 250 ",
    price: 400,
    offer: "25% off",
    oldPrice: 525,
    image: "images/image Product (7).png",
  },
  {
    id: 8,
    title: "Nike Air Max 250 ",
    price: 100,
    offer: "25% off",
    oldPrice: 175,
    image: "images/image Product (8).png",
  },
  {
    id: 9,
    title: "Nike Air Max 250 ",
    price: 150,
    offer: "25% off",
    oldPrice: 250,
    image: "images/image Product (9).png",
  },
  {
    id: 10,
    title: "Nike Air Max 100 ",
    price: 270,
    offer: "25% off",
    oldPrice: 35,
    image: "images/image Product (10).png",
  },
  {
    id: 11,
    title: "Nike Air Max 250 ",
    price: 129,
    offer: "25% off",
    oldPrice: 210,
    image: "images/image Product (11).png",
  },
  {
    id: 12,
    title: "Nike Bag 300",
    price: 299,
    offer: "25% off",
    oldPrice: 534,
    image: "images/image Product (13).png",
  },
];

let cart = [];
let likedProducts = [];

const drawProduts = (items) => {
  allProducts.innerHTML = "";

  const y = items
    .map((item) => {
      return `
  <div class="col-10 m-auto col-md-5 col-xl-4 col-xxl-3 my-3" data-product-id="${item.id}" >
  <div
    class="col-11 m-auto text-center pb-3 mt-4 section3-content-div"
  >
    <img
      src="${item.image}"
      class="rounded-4"
      width="100%"
      height="236"
      alt=""
    />
    <div class="overlay mt-2 rounded-4 col-12 pt-5 pb-4">
      <div
        class="d-flex justify-content-around m-auto p-5 col-12"
      >
        <button class="border-0 bg-white" onclick="addToCart(${item.id})">
          <div class="icon-s">
            <i class="fas fa-cart-shopping"></i>
          </div>
        </button>
        <button class="icon-s" onclick="addToLikedProduct(${item.id})">
            <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
    <h2 class="fs-4 mt-2 py-2 h41">${item.title}</h2>
    <div class="d-flex text-warning col-7 m-auto pt-2">
      <i class="fa-solid fa-star ms-2"></i>
      <i class="fa-solid fa-star ms-3"></i>
      <i class="fa-solid fa-star ms-3"></i>
      <i class="fa-solid fa-star ms-3"></i>
      <i class="fa-regular fa-star ms-3"></i>
    </div>
    <div class="col-10 m-auto d-flex justify-content-between align-items-center mt-4">
      <h5 class="text-info">$${item.price}.00</h5>
      <h5 class="h61 fs-6 text-decoration-line-through">$${item.oldPrice}.00</h5>
      <h5 class="h62 fs-6">${item.offer}</h5>
    </div>
  </div>
</div>
  
  `;
    })
    .join("");
  allProducts.innerHTML = y;
};
//  Add To Cart

const addToCart = (productId) => {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  const qty = document.querySelector("#qty");
  qty.style.display = "flex";
  const total = document.querySelector("#pro");
  total.style.display = "flex";
  cartCount.style.display = "flex";

  drawCart();
  updateCartCount();
};
function drawCart() {
  const productsInCart = cart
    .map(
      (item) => `
  <div class="container d-block d-lg-flex justify-content-between border border-start-0 border-end-0 border-top-0 mt-4 py-2 pb-3">
  <div class="col-12 col-lg-6 d-flex align-content-center">
  <div class="mt-2 me-4">
  <button class="me-4 mt-3 border-0 bg-transparent" onclick="removeFromCart(${
    item.id
  })">
  <i class="fas fa-x" style="color: #FF4252;"></i>
  </button>
  </div>
    <img src="${item.image}" width="100" class="rounded-3 me-2" alt="">
    <h2 class="fs-5 mt-4 ms-5">${item.title}</h2>
  </div>
  <div class="col-6 d-flex justify-content-between">
    <h4 class="mt-3" style="color: #262626;">$${
      item.price * item.quantity.toFixed(2)
    }.00</h4>
    <div class="d-flex py-2 mt-2 px-4 ms-0 ms-sm-4 rounded" style="height: 50px; background-color: #F6F7F8;">
    <button class="me-3 border-0 bg-transparent" onclick="decreaseQuantity(${
      item.id
    })">
    <i class="fa-solid fa-minus" style="height: 10px; color: #33A0FF; cursor: pointer;"></i>
    </button>
      <h3 class="px-4">${item.quantity}</h3>


      <button class="ms-4 border-0 bg-transparent" onclick="increaseQuantity(${
        item.id
      })">
      <i class="fa-solid fa-plus" style="height: 10px; color: #33A0FF; cursor: pointer;"></i>
      </button>
    </div>
    <h4 class="mt-3 ms-0 ms-sm-5" style="color: #262626;">$${item.price.toFixed(
      2
    )}</h4>        
  </div>
</div>

`
    )
    .join("");

  document.getElementById("listcard").innerHTML = productsInCart;

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  document.getElementById("total").textContent = `$ ${totalPrice}`;
}
let cartCount = document.getElementById("cartCount");
function updateCartCount() {
  const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalCount;
}

function increaseQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  cartItem.quantity++;
  drawCart();
}

function decreaseQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem.quantity > 1) {
    cartItem.quantity--;
  } else {
    removeFromCart(productId);
  }
  drawCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  drawCart();
  updateCartCount();
}

drawProduts(products);
updateCartCount();

/////   Liked Products

function addToLikedProduct(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = likedProducts.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    likedProducts.push({ ...product });
  }
  drawLikedProducts();

  let likedBtn = document.querySelector(
    `[onclick="addToLikedProduct(${productId})"]`
  );
  if (likedBtn) {
    likedBtn.style.backgroundColor = "#33a0ff";
    likedBtn.style.color = "white";
  }

  let favo = document.querySelector("#favo");
  favo.style.display = "flex";
}

function drawLikedProducts() {
  const z = likedProducts
    .map(
      (item) => `
  <div class="col-10 m-auto col-md-5 col-xl-4 col-xxl-3 my-3" data-product-id="${item.id}" >
  <div
    class="col-11 m-auto text-center pb-3 mt-4 section3-content-div"
  >
    <img
      src="${item.image}"
      class="rounded-4"
      width="100%"
      height="236"
      alt=""
    />
    <div class="overlay mt-2 rounded-4 col-12 pt-5 pb-4">
      <div
        class="d-flex justify-content-around m-auto p-5 col-12"
      >
        <button class="icon-y" onclick="removeFromLikedProducts(${item.id})">
            <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
    <h2 class="fs-4 mt-2 py-2 h41">${item.title}</h2>
    <div class="d-flex text-warning col-7 m-auto pt-2">
      <i class="fa-solid fa-star ms-2"></i>
      <i class="fa-solid fa-star ms-3"></i>
      <i class="fa-solid fa-star ms-3"></i>
      <i class="fa-solid fa-star ms-3"></i>
      <i class="fa-regular fa-star ms-3"></i>
    </div>
  </div>
</div>
 `
    )
    .join("");
  document.getElementById("likedProduct").innerHTML = z;
}

function removeFromLikedProducts(productId) {
  likedProducts = likedProducts.filter((item) => item.id !== productId);
  drawLikedProducts();

  let likedBtn = document.querySelector(
    `[onclick="addToLikedProduct(${productId})"]`
  );

  if (likedBtn) {
    likedBtn.style.backgroundColor = "white";
    likedBtn.style.color = "#33a0ff";
  }
}

//////  Search About Product

const searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("input", () => {
  const searchTerm = searchBar.value.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const productName = product.title.toLowerCase();

    const isNameMatched = productName.includes(searchTerm);

    return isNameMatched;
  });

  drawProduts(filteredProducts);
});
