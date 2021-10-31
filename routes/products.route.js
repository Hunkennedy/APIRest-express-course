const router = require('express').Router();
const ProductService = require('../services/products.service');


const service = new ProductService();



//>>get methods
router.get('/', (req, res) => {
    const products = service.find();

    res.json(products);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(service.findProd(id));
});

//>>post method
router.post('/', (req, res) => {
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
});

//>>patch metho
router.patch('/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const product = service.update(id,body);
    res.status(204).json(product);
});

// >>delete method
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const product = service.delete(id)
    res.json(product);
})

module.exports = router;
