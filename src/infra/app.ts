import './dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error({ error });
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });
});

export { app };
