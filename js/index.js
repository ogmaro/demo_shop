const store = {
  name: [
    "Junye",
    "Force ADP",
    "Axie",
    "Vica",
    "iRong",
    "iRage",
    "Night",
    "iNead",
    "Storm Roller",
    "Q-Iginition",
  ],
  prices: [
    99.99, 49.99, 41.99, 11.99, 119.99, 160.99, 110.99, 186.99, 499.99, 399.99,
  ],
};
const prices = document.querySelectorAll(".price span");
const productNames = document.querySelectorAll(".card h1");
const closeCart = document.querySelector(".cart-display a");
const cartDisplay = document.querySelector(".cart-display");
const buttons = document.querySelectorAll(".btn");
const card = document.querySelectorAll(".card");
const cart = document.querySelector(".cart i");
const totalInCart = document.querySelector(".sum span");

// display cart
cart.addEventListener("click", () => {
  cartDisplay.classList.remove("hidden");
});

//populate with store items
nameNpriceChange(prices, store, "prices");
nameNpriceChange(productNames, store, "name");

//Close cart menu
closeCart.addEventListener("click", (event) => {
  event.preventDefault();
  cartDisplay.classList.add("hidden");
});

//Add items to cart
buttons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

// These are all Functions
//This function add an item to th cart
function addToCart(event) {
  event.preventDefault();
  let btn = event.target;
  let nameChoosen = btn.parentElement.children[1].innerText;
  let priceChoosen = btn.parentElement.children[2].children[0].innerText;
  cartDisplay.classList.remove("hidden");
  const cartItemAside = document.createElement("aside");
  cartItemAside.className = "cartRemove";
  cartItemAside.innerHTML = `<div>
  <p>${nameChoosen}</p>
  <input type="number" value="1" min="1" id="" />
  <button class="items"><i class='bx bx-x'></i></i></button>
  <p>N<span class="changedT">${priceChoosen}</span></p>
  </div>`;
  document.getElementById("cartUpdate").appendChild(cartItemAside);

  updateCart();
  grandTotal();
  removeFromCrat();
}
// https://github.com/ClintonCode20/Js_shopping_cart/blob/main/script.js
// https://www.youtube.com/watch?v=1RnzyplvqEg
function updateCart() {
  const quantity = document.querySelectorAll("input");

  quantity.forEach((qty) => {
    qty.addEventListener("change", function totalCost(event) {
      let input_field = event.target;
      input_field_parent = input_field.parentElement;
      price_field = Number(
        input_field_parent.children[3].children[0].innerText
      );
      let total_price = input_field_parent.children[3].children[0];

      total_price.textContent = (
        price_field * Number(input_field.value)
      ).toFixed(2);
      grandTotal();
      if (isNaN(Number(input_field.value)) || Number(input_field.value) <= 0) {
        input_field.value = 1;
      }
      console.log(input_field);
    });
  });

  // function totalCost(event){
  //   let quantity = event.target
  //   quantity_parent = quantity.parentElement.parentElement
  //   price_field = quantity_parent.getElementsByClassName('item-price')[0]
  //   total_field = quantity_parent.getElementsByClassName('total-price')[0]
  //   price_field_content = price_field.innerText.replace('$', '')
  //   total_field.children[0].innerText = '$' +  quantity.value * price_field_content
  //   grandTotal()

  // console.log(price)
  // const quantity = document.querySelectorAll("input");
  // quantity.forEach((field) => {
  //   field.addEventListener("input", (event) => {
  //     event.preventDefault();
  //     value_item = event.target;
  //     let price = Number(
  //       value_item.parentElement.children[3].children[0].innerText
  //     );
  //     console.log(value_item.parentElement.children[3].children[0]);
  //     total = Number(value_item.value) * Number(price);
  //     value_item.parentElement.children[3].innerText = total.toFixed(2);
  //     grandTotal();
  //     if (isNaN(Number(value_item.value)) || Number(value_item.value) <= 0) {
  //       value_item.value = 1;
  //     }
  //   },false);
  // });
}
function grandTotal() {
  const totalPrice = document.querySelectorAll(".changedT");
  let totalPriceUpdate = 0;
  totalPrice.forEach((price) => {
    totalPriceUpdate += Number(price.innerText);
  });
  document.querySelector(".sum span").textContent = totalPriceUpdate.toFixed(2);
}
function removeFromCrat() {
  const removeCartItem = document.querySelectorAll(".items");
  removeCartItem.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      item.parentElement.parentElement.remove();
      grandTotal();
    });
  });
}
// Create  function to add prices using from the store array
function nameNpriceChange(arr, sto, storeArray) {
  arr.forEach((price, i) => {
    price.textContent = sto[storeArray][i];
  });
}
