const express = require('express');
const app = express();
const routerApi = require('./routes/index');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const cors = require('cors');
const port = 4040;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('hello');
})

routerApi(app); //-->routes/index
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`http://localhost:${port}`);
});
