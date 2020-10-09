import express from 'express';
import mysql from 'mysql';

const app: express.Application = express();
const port = 4000;

enum IEstado {
  PENDIENTE='PENDIENTE',
  CANCELADO='CANCELADO',
  TERMINADO='TERMINADO'
};

type Itodo =  {
  id: number,
  titulo: string,
  descripcion: string,
  estado: IEstado
};

type IReponse = {
  data: {
    todos: Itodo[]
  }
};

// Crear conexion a MYSQL
const configMysql: mysql.ConnectionConfig = {
  host: 'localhost',
  user: 'root',
  password: 'palvin2015',
  database: 'todoApp'
};

// Configuracion para conexion MYSQL
const mysqlConnection = mysql.createConnection(configMysql);

// Ruta que utilizara la conexion para hacer querys
app.get('/hello_world', (req: express.Request, res: express.Response) => {

  const name: string = 'Yael';

  type Saludo = {
    message: string;
  };
  
  const saludo: Saludo = {
    message: `Hola mundo, soy ${name}`
  };

  res.json(saludo);
});

app.get('/suma', (req: express.Request, res: express.Response) => {
  mysqlConnection.query('SELECT 1 + 1 AS solution', (error, result, fields) => {
    res.json({
      error,
      result,
      fields
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
