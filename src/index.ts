import express from 'express';

const app: express.Application = express();
const port = 4000;

type IMessage = {
  message: string;
};

const message: IMessage = {
  message: 'Hola mundo'
};

app.get('/hello_world', (req: express.Request, res: express.Response) => {
  res.json(message);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
