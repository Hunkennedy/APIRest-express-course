const router = require('express').Router();
const UsersService = require('../services/users.service');
const service = new UsersService();
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema');


router.get('/', async (req, res) => {
    res.json(await service.find());
});

router.get('/:id',validatorHandler(getUserSchema, 'params'), async (req, res, next) => {
    try {
        const { id }= req.params;
        res.json(await service.findUser(id));
    }
    catch (error) {
        next(error)
    }
});


router.post('/',validatorHandler(createUserSchema, 'body'), async (req, res) => {
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
});

router.patch('/:id',validatorHandler(getUserSchema, 'params'), validatorHandler(updateUserSchema, 'body'), async(req, res, next) => {
    try{
        const body = req.body;
        const { id } = req.params;
        const user = await service.update(id, body);
        res.status(204).json(user);
    }
    catch(error) {
        next(error)
    }
});

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const user = await service.delete(id);
    res.json(user);
});

module.exports = router;
