"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const app = express_1.default();
const port = 4000;
var IEstado;
(function (IEstado) {
    IEstado["PENDIENTE"] = "PENDIENTE";
    IEstado["CANCELADO"] = "CANCELADO";
    IEstado["TERMINADO"] = "TERMINADO";
})(IEstado || (IEstado = {}));
;
// Crear conexion a MYSQL
const configMysql = {
    host: 'localhost',
    user: 'root',
    password: 'palvin2015',
    database: 'todoApp'
};
// Configuracion para conexion MYSQL
const mysqlConnection = mysql_1.default.createConnection(configMysql);
// Ruta que utilizara la conexion para hacer querys
app.get('/hello_world', (req, res) => {
    const name = 'Yael';
    const saludo = {
        message: `Hola mundo, soy ${name}`
    };
    res.json(saludo);
});
app.get('/suma', (req, res) => {
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
//# sourceMappingURL=index.js.map