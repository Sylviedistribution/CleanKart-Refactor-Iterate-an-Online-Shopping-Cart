export default class CartView {
    constructor() {
        this.listProducts = document.querySelector(".list-products");
        this.total = document.querySelector("#total");
    }

    updateQuantity(productId, quantity) {
        const quantityNode = document.querySelector(
            `.quantity[data-product-id="${productId}"]`
        );

        if (quantityNode) {
            quantityNode.textContent = quantity;
        }
    }

    updateTotal(total) {
        if (this.total) {
            this.total.textContent = `${total} $`;
        }
    }

    removeProduct(productId) {
        const card = document.querySelector(`[data-product-id="${productId}"]`);

        if (card) {
            card.remove();
        }
    }

    render(cart) {
        if (!this.listProducts) {
            return;
        }

        this.listProducts.innerHTML = cart.items
            .map((item, index) => {
                const { product, quantity, favorite } = item;
                const heartColor = favorite ? "red" : "black";
                const minusOpacity = quantity === 0 ? "0.5" : "1";

                return `
                <div class="card-body-0" data-index="${index}" data-product-id="${product.id}">
                  <div class="card" style="width: 18rem">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}" />
                    <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">${product.description || "Product description"}</p>
                      <h4 class="unit-price">${product.price} $</h4>
                      <div>
                        <i class="fas fa-plus-circle" data-action="increase" data-index="${index}"></i>
                        <span class="quantity" data-product-id="${product.id}">${quantity}</span>
                        <i class="fas fa-minus-circle" data-action="decrease" data-index="${index}" style="opacity: ${minusOpacity}"></i>
                      </div>
                      <div>
                        <i class="fas fa-trash-alt" data-action="remove" data-index="${index}"></i>
                        <i class="fas fa-heart" data-action="favorite" data-index="${index}" style="color: ${heartColor}"></i>
                      </div>
                    </div>
                  </div>
                </div>`;
            })
            .join("");

        this.updateTotal(cart.calculateTotal());
    }

    bindEvents(controller) {
        if (!this.listProducts) {
            return;
        }

        this.listProducts.addEventListener("click", (event) => {
            const actionNode = event.target.closest("[data-action]");
            if (!actionNode) {
                return;
            }

            const index = Number(actionNode.dataset.index);
            if (Number.isNaN(index)) {
                return;
            }

            const action = actionNode.dataset.action;

            if (action === "increase") {
                controller.increaseQuantity(index);
                return;
            }

            if (action === "decrease") {
                controller.decreaseQuantity(index);
                return;
            }

            if (action === "remove") {
                controller.removeProduct(index);
                return;
            }

            if (action === "favorite") {
                controller.toggleFavorite(index);
            }
        });
    }
}
