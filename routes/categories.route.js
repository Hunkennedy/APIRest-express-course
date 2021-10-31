
const router = require('express').Router();
const CategoriesService = require('../services/categories.service');

const service = new  CategoriesService();


router.get('/', async (req, res) => {
    const categories = await service.get();
    res.json(categories);
});


router.get('/:id', async (req, res) => {
    const { id } =  req.params;
    res.json(await service.getCategory(id));
});

router.post('/', async (req, res) => {
    const body = req.body; //--> get data from client
    const newCategory = await service.create(body); // --> send data to the service
    res.status(201).json(newCategory);
});

router.patch('/:id', async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const category = await service.update(id, body);
    res.status(204).json(category);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const category = await service.delete(id)
    res.json(category);
});

module.exports = router;
