import NoDiscount from "../strategy/NoDiscount.js";
import CartItem from "./CartItem.js";

export default class ShoppingCart {

    constructor() {

        this.items = [];

        this.discountStrategy = new NoDiscount();

    }

    addProduct(product) {
        const cartItem = new CartItem(product);
        this.items.push(cartItem);
    }

    addItem(cartItem) {
        this.items.push(cartItem);
    }

    removeItem(productId) {
        this.items = this.items.filter(
            item => item.product.id !== productId
        );
    }

    setDiscountStrategy(strategy) {
        this.discountStrategy = strategy;
    }

    calculateTotal() {
        const total = this.items.reduce(
            (sum, item) => sum + item.getSubtotal(),
            0
        );
        return this.discountStrategy.calculate(total);
    }

}