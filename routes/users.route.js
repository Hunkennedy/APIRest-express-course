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
    const newUser = service.create(body);
    res.status(201).json(newUser);
});

router.patch('/:id', (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const user = service.update(id, body);
    res.status(204).json(user);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const user = service.delete(id);
    res.json(user);
});

module.exports = router;
