const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');
const dashboardRoutes = require('./routes/dashboard.routes')
const authenticationMiddleware = require('./middleware/authentication.middleware')

const app = express();

// Configurar la conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/app-uniminuto', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Configurar el procesamiento de datos en el cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar el manejo de sesiones de usuario
app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: false
}));

// Configurar el motor de plantillas
app.use(express.static(__dirname + '/assets'));
app.set('views', __dirname+'/views/');
app.set('view engine', 'ejs');

// Configurar las rutas
app.use('/', authRoutes);
//app.use(authenticationMiddleware)
app.use('/dashboard', dashboardRoutes)

// Manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
