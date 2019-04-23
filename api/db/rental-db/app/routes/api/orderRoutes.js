const express = require('express');
const router = express.Router();

//controller here
const OrderController = require('../../controller/orderController');
const orderController = new OrderController();

//user routes
router.get('/', function(req, res) {
    orderController.findAll(res);
});

router.get('/:id', function(req, res) {
    orderController.findOne(req, res);
});

router.get('/order/:user_id', function(req, res) {
    orderController.findByName(req, res);
});

router.post('/create', function(req, res) {
    orderController.create(req, res);
});

router.put('/edit/:id', function(req, res) {
    orderController.update(req, res);
});

router.delete('/:id', function (req, res) {
    orderController.deleteById(req, res);
});

module.exports = router;