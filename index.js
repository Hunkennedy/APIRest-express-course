const express = require('express');
const app = express();
const port = 4040;


app.get('/', (req, res) => {
    res.send('home');
});

app.get('/categories', (req, res) => {
    res.json({
        name: 'shoes',
        products: {
            name: 'nike',
            price: 500
        }
    })
})

app.get('/products', (req, res) => {
    res.json({
        name: 'product1',
        price: 30
    });
});

app.listen(port);