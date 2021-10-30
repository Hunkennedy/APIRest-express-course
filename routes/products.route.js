const faker = require('faker');
const router = require('express').Router();



//>>get methods


router.get('/', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let i = 0; i < limit; i++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price()),
            image: faker.image.imageUrl()
        });
    }
    res.json(products);
});

router.get('/filter', (req, res) => {
    res.json({ message: 'filter-page' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'product1',
        price: 30
    });
});

//>>post method
router.post('/', (req, res) => {
    res.json({
        message: 'product created',
        data: req.body
    });
});

module.exports = router;