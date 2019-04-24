const Order = require("../model/order");
const daoCommon = require("./common/daoCommon");

class OrderDao{
    constructor(){
        this.common - new daoCommon();
    }

    findAll(){
        let sqlRequest = "SELECT * FROM orders";

        return this.common.findAll(sqlRequest).then(rows => {
            let orders = [];
            for(const row of rows){
                orders.push( new Order(
                    row.id,
                    row.name,
                    row.description,
                    row.price,
                    row.img
                ));
            }
            return orders;
        });
    }
}

module.exports = OrderDao;