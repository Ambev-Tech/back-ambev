const express = require('express');
const { ExceptionHandler } = require('./middlewares/exceptionHandler');
const cors = require("cors");

require('dotenv/config')

require('express-async-errors')

const port = process.env.PORT || 3333;
const app = express()
const routes = require('./routes/index');

const { ExceptionParams } = require('./middlewares/exceptionParams');

app.use(cors())

app.use(express.json())

app.use(routes)

app.use(ExceptionParams)

app.use(ExceptionHandler)

app.listen(port, () => console.log(`Listening on port ${port} ...`))