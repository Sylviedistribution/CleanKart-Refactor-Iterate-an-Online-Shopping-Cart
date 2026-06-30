export default class PriceNotifier{

    constructor(){

        this.observers=[];

    }

    subscribe(observer){

        this.observers.push(observer);

    }

    unsubscribe(observer){

        this.observers=this.observers.filter(
            obs=>obs!==observer
        );

    }

    notify(product){

        this.observers.forEach(observer=>{

            observer.update(product);

        });

    }

}