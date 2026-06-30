/* ==========
   IMPORTS
   ========== */

import ProductBuilder from "./builder/ProductBuilder.js";

import ShoppingCart from "./models/ShoppingCart.js";

import CartView from "./views/CartView.js";

import ShoppingCartController from "./controllers/ShoppingCartController.js";

import NoDiscount from "./strategy/NoDiscount.js";

import PercentageDiscount from "./strategy/PercentageDiscount.js";

import PriceNotifier from "./observer/PriceNotifier.js";

import EmailObserver from "./observer/EmailObserver.js";

import SmsObserver from "./observer/SmsObserver.js";


/* ==========
   CREATION DES PRODUITS
   ========== */

const basket = new ProductBuilder()
    .setId(1)
    .setName("Basket")
    .setPrice(100)
    .setImage("assets/baskets.png")
    .setCategory("Shoes")
    .setStock(10)
    .build();

const socks = new ProductBuilder()
    .setId(2)
    .setName("Socks")
    .setPrice(20)
    .setImage("assets/socks.png")
    .setCategory("Accessories")
    .setStock(50)
    .build();

const bag = new ProductBuilder()
    .setId(3)
    .setName("Bag")
    .setPrice(50)
    .setImage("assets/bag.png")
    .setCategory("Fashion")
    .setStock(15)
    .build();


/* ==========
   CREATION DU PANIER
   ========== */

const shoppingCart = new ShoppingCart();

shoppingCart.addProduct(basket);
shoppingCart.addProduct(socks);
shoppingCart.addProduct(bag);


/* ==========
   STRATEGY
   ========== */

shoppingCart.setDiscountStrategy(

    new NoDiscount()

);

// Exemple

// shoppingCart.setDiscountStrategy(
//      new PercentageDiscount(20)
// );


/* ==========
   OBSERVER
   ========== */

const notifier = new PriceNotifier();

notifier.subscribe(

    new EmailObserver()

);

notifier.subscribe(

    new SmsObserver()

);


/* ==========
   VUE
   ========== */

const cartView = new CartView();


/* ==========
   CONTROLLER
   ========== */

const controller = new ShoppingCartController(

    shoppingCart,

    cartView,

    notifier

);


/* ==========
   DEMARRAGE
   ========== */

controller.initialize();