const OrderDao = require('../dao/orderDao');

const ControllerCommon = require('./common/controllerCommon');

const Order = require('../model/order');

class OrderController {
    constructor() {
        this.orderDao = new OrderDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.orderDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
    findOne(req, res) {
        let id = req.params.id;

        this.orderDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    findByName(req, res) {
        let order_id = req.params.order_id;

        this.orderDao.findByName(order_id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    create(req, res) {
        let order = new Order();

        order.user_id = req.body.user_id;
        order.product_id = req.body.product_id;
        order.date = req.body.date;

        return this.orderDao.create(user)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    }
    update(req, res) {
        let order = new Order();

        order.id = req.params.id;
        order.user_id = req.body.user_id;
        order.product_id = req.body.product_id;
        order.date = req.body.date;

        return this.orderDao.update(order)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    }
    deleteById(req, res) {
        let id = req.params.id;
        
        this.orderDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.findError(res))
    }

}

module.exports = OrderController;