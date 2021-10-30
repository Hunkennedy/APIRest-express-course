const router = require('express').Router();




router.get('/', (req, res) => {
    const { limit, offset } = req.query;
    if (limit && offset) {
        res.json({ limit, offset });
    }
    else {
        res.json({ message: 'No parameters' });
    }
});


router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'user created',
        data: body
    })
});

module.exports = router;
