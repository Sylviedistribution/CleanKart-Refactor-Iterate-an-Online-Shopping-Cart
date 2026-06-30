import DiscountStrategy from "./DiscountStrategy.js";

export default class NoDiscount extends DiscountStrategy {

    calculate(total){

        return total;

    }

}