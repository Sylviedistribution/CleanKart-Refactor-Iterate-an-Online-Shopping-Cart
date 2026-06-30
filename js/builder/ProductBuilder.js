import Product from "../models/Product.js";

export default class ProductBuilder{

    constructor(){

        this.id = null;
        this.name = "";
        this.price = 0;
        this.image = "";
        this.description = "";
        this.category = "";
        this.stock = 0;

    }

    setId(id){

        this.id = id;

        return this;

    }

    setName(name){

        this.name = name;

        return this;

    }

    setPrice(price){

        this.price = price;

        return this;

    }

    setImage(image){

        this.image = image;

        return this;

    }

    setDescription(description){

        this.description = description;

        return this;

    }

    setCategory(category){

        this.category = category;

        return this;

    }

    setStock(stock){

        this.stock = stock;

        return this;

    }

    build(){

        return new Product(

            this.id,
            this.name,
            this.price,
            this.image,
            this.description,
            this.category,
            this.stock

        );

    }

}