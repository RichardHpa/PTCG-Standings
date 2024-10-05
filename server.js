import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { format } from 'date-fns';
import cors from 'cors';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(cors());

const initialSetup = async () => {
  console.log('Initial Setup');
};

initialSetup().then(() => {
  app.listen(port, () => {
    console.log(`Server started at ${format(new Date(), 'Pp')}`);
    console.log(`Listening on PORT: ${port}`);

    if (process.env.NODE_ENV === 'development') {
      console.log(`Open http://localhost:${port} to see the app`);
    }
  });
});
