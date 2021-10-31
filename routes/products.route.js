const router = require('express').Router();
const ProductService = require('../services/products.service');


const service = new ProductService();



//>>get methods
router.get('/', (req, res) => {
    const products = service.find();
    
    res.json(products);
});

router.get('/filter', (req, res) => {
    res.json({ message: 'filter-page' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(service.findProd(id));
});

//>>post method
router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: 'created',
        data: body
    });
});

router.patch('/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    res.status(204).json({
        message: 'updated',
        data: body,
        id
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleted',
        id
    });
})

module.exports = router;