
const router = require('express').Router();



router.get('/', (req, res) => {
    res.json({
        id: 1,
        name: 'shoes',
        products: {
            name: 'nike',
            price: 500
        }
    });
});


router.get('/:idCategory/products/:idProduct', (req, res) => {
    const { idCategory, idProduct } = req.params;
    res.json({ idCategory, idProduct });
});

router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: 'category created',
        data: body
    });
});

router.patch('/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    res.json({
        message: 'category created',
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
});

module.exports = router;