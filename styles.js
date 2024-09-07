//Created an object class for the product to store the properties for id, name and price of the product.
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Created an object class for the shopping cart item to store the properties for product and its quantity.
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // added the method to calculate total price for this item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// Object class for the shopping cart which contains an array of ShoppingCartItem instances
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // code for adding item to the cart and updating the total
  addItem(product, quantity) {
    const existingItem = this.items.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
    this.updateTotalPrice();
  }

  // Code for removing item from the cart
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
    this.updateTotalPrice();
  }

  // Updating total price displayed in the DOM Total price section
  updateTotalPrice() {
    const totalPrice = this.items.reduce(
      (total, item) => total + item.getTotalPrice(),
      0
    );
    document.getElementById('total').innerText = `${totalPrice} $`;
  }
}
//testing the ability of our objects
// Creating products
const products = [
  new Product(1, 'Baskets', 200),
  new Product(2, 'Socks', 20),
  new Product(3, 'Bag', 500),
];

// creating the shopping cart
const cart = new ShoppingCart();

// Utility function to update the quantity in the DOM
function updateQuantity(element, quantity) {
  element.querySelector('.quantity').innerText = quantity;
}

// Event handling for the shopping cart actions
document.querySelectorAll('.card-body').forEach((card) => {
  const productId = parseInt(card.dataset.id);
  const product = products.find((p) => p.id === productId); // Find the correct product

  // Code for clicking the plus button to add item to the cart
  card.querySelector('.fa-plus-circle').addEventListener('click', (event) => {
    event.stopImmediatePropagation(); // Prevent multiple event listeners from firing
    let quantityElement = card.querySelector('.quantity');
    let quantity = parseInt(quantityElement.innerText);
    quantity += 1; // Increment the quantity by 1
    updateQuantity(card, quantity);
    cart.addItem(product, 1); // Add only 1 item to the cart
  });

  // Code for clicking the minus button to remove item quantity
  card.querySelector('.fa-minus-circle').addEventListener('click', (event) => {
    event.stopImmediatePropagation(); // Prevent multiple event listeners from firing
    let quantityElement = card.querySelector('.quantity');
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 0) {
      quantity -= 1; // Decrease the quantity by 1
      updateQuantity(card, quantity);
      if (quantity > 0) {
        cart.addItem(product, -1); // Remove 1 item from the cart
      } else {
        cart.removeItem(productId); // If quantity is 0, remove the item completely
      }
    }
  });
  // When you click the trash icon it removes item from cart.
  card.querySelector('.fa-trash-alt').addEventListener('click', () => {
    updateQuantity(card, 0); // Reset quantity to 0
    cart.removeItem(productId); // This code removes the item quantity and total from the cart
    card.remove(); // Code to remove the the items from the cart completely
  });
  // Code for clicking the heart icon to like the product
  const heartIcon = card.querySelector('.fa-heart');
  heartIcon.addEventListener('click', (event) => {
    event.stopImmediatePropagation(); //This prevents multiple event listeners from firing
    heartIcon.classList.toggle('liked'); // This toggles the 'liked' class
    if (heartIcon.classList.contains('liked')) {
      heartIcon.style.color = 'red'; // Changes the heart color to red when liked
    } else {
      heartIcon.style.color = ''; // Reset to default color when unliked
    }
  });
});
