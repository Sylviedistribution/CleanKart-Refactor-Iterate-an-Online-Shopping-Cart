import Observer from "./Observer.js";

export default class PushObserver extends Observer{

    update(product){

        console.log(
            `Push Notification : ${product.name} promotion`
        );

    }

}