const router = require('express').Router();
const UsersService = require('../services/users.service');
const service = new UsersService();


router.get('/', (req, res) => {
    res.json(service.find());
});

router.get('/:id', (req,res) => {
    const { id }= req.params;
    res.json(service.findUser(id));
});


router.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: 'user created',
        data: body
    });
});

router.patch('/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    res.status(204).json({
        message: 'created',
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
