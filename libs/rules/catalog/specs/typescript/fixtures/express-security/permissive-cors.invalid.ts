import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(cors({ origin: '*', credentials: true }));
