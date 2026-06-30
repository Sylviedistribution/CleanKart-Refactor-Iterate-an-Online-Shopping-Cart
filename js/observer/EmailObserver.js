import Observer from "./Observer.js";

export default class EmailObserver extends Observer{

    update(product){

        console.log(
            `Email : ${product.name} est maintenant à ${product.price}€`
        );

    }

}