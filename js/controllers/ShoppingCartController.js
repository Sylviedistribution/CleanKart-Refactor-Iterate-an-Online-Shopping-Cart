export default class ShoppingCartController {

    constructor(cart, view, notifier) {

        this.cart = cart;

        this.view = view;

        this.notifier = notifier;

    }

    initialize() {
        this.view.bindEvents(this);
        this.view.render(this.cart);
    }

    increaseQuantity(index) {
        const item = this.cart.items[index];
        if (!item) {
            return;
        }

        item.increaseQuantity();
        this.view.render(this.cart);
    }

    decreaseQuantity(index) {
        const item = this.cart.items[index];
        if (!item) {
            return;
        }

        item.decreaseQuantity();
        this.view.render(this.cart);
    }

    removeProduct(index) {
        const item = this.cart.items[index];
        if (!item) {
            return;
        }

        this.cart.removeItem(item.product.id);
        this.view.render(this.cart);
    }

    toggleFavorite(index) {
        const item = this.cart.items[index];
        if (!item) {
            return;
        }

        item.toggleFavorite();
        this.view.render(this.cart);
    }
}