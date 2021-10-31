
const router = require('express').Router();
const CategoriesService = require('../services/categories.service');

const service = new  CategoriesService();


router.get('/', (req, res) => {
    const categories = service.get();
    res.json(categories);
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(service.getCategory(id));
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
    res.status(204).json({
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