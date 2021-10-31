const router = require('express').Router();
const ProductService = require('../services/products.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/products.schema');

const service = new ProductService();



//>>get methods
router.get('/', async (req, res) => {
    const products = await service.find();

    res.json(products);
});

router.get('/:id', validatorHandler(getProductSchema, 'params'), async (req, res,next) => {
    try {
        const { id } = req.params;
        res.json(await service.findProd(id));
    }
    catch (error) {
        next(error);
    }
});

//>>post method
router.post('/', validatorHandler(createProductSchema, 'body'), async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
});

//>>patch metho
router.patch('/:id', validatorHandler(getProductSchema, 'params'), validatorHandler(updateProductSchema, 'body'), async (req, res, next) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const product = await service.update(id,body);
        res.status(204).json(product);
    }
    catch(error) {
        next(error);
    }
});

//>>delete method
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await service.delete(id)
    res.json(product);
})

module.exports = router;
