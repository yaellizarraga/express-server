import express from 'express';

const app = express();
const port = 4000;

app.get('/hello_world', (req, res) => {
  res.json({
    message: 'Hola mundo desde el server'
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
