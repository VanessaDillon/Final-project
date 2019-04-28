const Order = require("../model/order");
const daoCommon = require("./common/daoCommon");

class OrderDao{
    constructor(){
        this.common = new daoCommon();
    }

    findAll(){
        let sqlRequest = "SELECT * FROM orders";

        return this.common.findAll(sqlRequest).then(rows => {
            let orders = [];
            for(const row of rows){
                orders.push( new Order(
                    row.id,
                    row.user_id,
                    row.product_id,
                    row.date,
                    row.product_name,
                    row.order_name,
                ));
            }
            return orders;
        });
    }
}

module.exports = OrderDao;