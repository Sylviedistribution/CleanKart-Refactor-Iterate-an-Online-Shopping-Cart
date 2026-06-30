import Product from "../models/Product.js";

export default class CartItem {

    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
        this.favorite = false;
    }

    increaseQuantity() {
        this.quantity++;
    }

    decreaseQuantity() {
        if (this.quantity > 0) {
            this.quantity--;
        }
    }

    toggleFavorite() {
        this.favorite = !this.favorite;
    }

    getSubtotal() {
        return this.product.price * this.quantity;
    }

}