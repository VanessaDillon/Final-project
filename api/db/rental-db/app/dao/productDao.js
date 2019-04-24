const Product = require("../model/product");
const daoCommon = require("./common/daoCommon");

class ProductDao{
    constructor(){
        this.common = new daoCommon();
    }

    findAll(){
        let sqlRequest = "SELECT * FROM product";

        return this.common.findAll(sqlRequest).then(rows => {
            let products = [];
            for(const row of rows){
                products.push( new Product(
                    row.id,
                    row.name,
                    row.description,
                    row.price,
                    row.img
                ));
            }
            return products;
        });
    }
}

module.exports = ProductDao;