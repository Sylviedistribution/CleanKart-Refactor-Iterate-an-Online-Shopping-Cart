import Observer from "./Observer.js";

export default class SmsObserver extends Observer{

    update(product){

        console.log(
            `SMS : ${product.name} coûte maintenant ${product.price}€`
        );

    }

}