const Order = require("../model/order");
const daoCommon = require("./common/daoCommon");

class OrderDao{
    constructor(){
        this.common = new daoCommon();
    }

    findAll(){
        let sqlRequest = "SELECT * FROM orders";

        return this.common.findAll(sqlRequest).then(rows => {
            let order = [];
            for(const row of rows){
                order.push( new Order(
                    row.id,
                    row.user_id,
                    row.product_id,
                    row.date,
                    row.product_name,
                    row.order_name,
                ));
            }
            return order;
        });
    }
}

module.exports = OrderDao;