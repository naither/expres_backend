const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

const whitelist =['http://localhost:8080', 'http://127.0.0.1:5500', 'https://myapp.bo'];
const options = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
};

app.use(cors(options));


app.use(express.json());

app.get("/", (req, res) => {
  res.send("mi servidor Express");
});

app.get('/otraRuta', (req, res) => {
  res.send("Mi otra tienda express");
});

// Aquí deberías incluir las rutas definidas en routerApi
routerApi(app);

// Middlewares de manejo de errores deben ir al final
app.use(logErrors);
app.use(boomErrorHandler); // Asegúrate de que boomErrorHandler esté antes de errorHandler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`My port: ${port}`);
});
