
const ProductDao = require('../dao/productDao');

const ControllerCommon = require('./common/controllerCommon');

const Product = require('../model/product');
 //Dao is a data access object responsible for communications to the database
class ProductController {
    constructor() {
        this.productDao = new ProductDao();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        this.productDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
    findOne(req, res) {
        let id = req.params.id;
        this.productDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    findAllByName(req, res) {
        let name = req.params.name;
        this.productDao.findAllByName(name)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    findByName(req, res) {
        let name = req.params.name;
        this.productDao.findByName(name)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res))
    }
    create(req, res) {
        let product = new Product();

        
        product.year = req.body.year;
        product.color = req.body.color;
        product.seats = req.body.seats;
        product.img = req.body.img;
        product.description = req.body.description;
        product.id = req.params.id;
        product.name = req.body.name;
        product.price = req.body.price;

        return this.productDao.create(product)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    }
    update(req, res) {
        let product = new Product();

        product.img = req.body.img;
        product.id = req.params.id;
        product.description = req.body.description;
        product.year = req.body.year;
        product.color = req.body.color;
        product.seats = req.body.seats;
        product.price = req.body.price;
        product.name = req.body.name;

        return this.productDao.update(product)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    }
    deleteById(req, res) {
        let id = req.params.id;
        
        this.productDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.findError(res))
    }

}

module.exports = ProductController;