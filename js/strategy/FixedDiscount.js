import DiscountStrategy from "./DiscountStrategy.js";

export default class FixedDiscount extends DiscountStrategy{

    constructor(amount){

        super();

        this.amount = amount;

    }

    calculate(total){

        return Math.max(0,total-this.amount);

    }

}