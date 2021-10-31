
const router = require('express').Router();
const CategoriesService = require('../services/categories.service');

const validatorHandler = require('../middlewares/validator.handler');
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('../schemas/categories.schema');



const service = new  CategoriesService();


router.get('/', async (req, res) => {
    res.json(await service.get());
});


router.get('/:id',validatorHandler(getCategorySchema, 'params'), async (req, res, next) => {
    try {
        const { id } =  req.params;
        res.json(await service.getCategory(id));
    }
    catch (error) {
        next(error);
    }
});

router.post('/', validatorHandler(createCategorySchema), async (req, res) => {
    const body = req.body; //--> get data from client
    const newCategory = await service.create(body); // --> send data to the service
    res.status(201).json(newCategory);
});

router.patch('/:id', validatorHandler(getCategorySchema, 'params'), validatorHandler(updateCategorySchema, 'body'), async (req, res) => {
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
