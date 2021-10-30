const express = require('express');
const app = express();
const routerApi = require('./routes/index');
const port = 4040;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello');
})

routerApi(app); //-->routes/index


app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`http://localhost:${port}`);
});