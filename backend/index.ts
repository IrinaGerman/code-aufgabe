import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { router as CityRouter } from './routers/CityRouter'; 

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// City.sync({ force: true })

app.use("/cities", CityRouter);


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.stack);
  if (err instanceof Error) {
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.status(500).send('Something broke!');
  }  
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});