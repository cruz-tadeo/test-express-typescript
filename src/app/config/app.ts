import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import authRoute from '../modules/auth/presentation/route'
import serverless from 'serverless-http';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/api/v1', authRoute)

app.listen(port, () => {
  console.log(`⚡️[server]: server si se modifico en http://localhost:${port}`);
});

export const handler = serverless(app);