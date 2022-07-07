import cors from 'cors';
import express from 'express';
import handleError from './middlewares/handleErrorsMiddleware.js';
import router from './routers/index.js';
import "./config/setup.ts";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleError);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

export default app;