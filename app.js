var express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const mysql = require('mysql');


app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('Servidor montado en el puerto: ', app.get('port'));
});


// configurar la conexión con la base de datos
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'mida'
});

// establecer la conexión con la base de datos
connection.connect((error) => {
  if (error) throw error;
  console.log('Conectado a la base de datos');
});

// ruta para insertar un nuevo email electrónico en la base de datos
app.post('/emails', (req, res) => {
  const email = req.body.email;

  // insertar el correo electrónico en la base de datos
  const query = 'INSERT INTO emails (email) VALUES (?)';
  connection.query(query, [email], (error, results) => {
    if (error) throw error;
    res.send('Correo electrónico agregado correctamente');
  });
});


