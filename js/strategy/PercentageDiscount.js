import DiscountStrategy from "./DiscountStrategy.js";

export default class PercentageDiscount extends DiscountStrategy{

    constructor(percent){

        super();

        this.percent = percent;

    }

    calculate(total){

        return total - (total * this.percent / 100);

    }

}