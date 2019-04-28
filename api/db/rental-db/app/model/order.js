class Order {
    constructor(id, user_id, product_id, date, product_name, order_name) {
        this.id = id;
        this.user_id = user_id;
        this.product_id = product_id;
        this.date = date;
        this.product_name = product_name;
        this.order_name = order_name;
    }
}

module.exports = Order;