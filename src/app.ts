import 'reflect-metadata'
import express from 'express';
import cors from 'cors';
import { createEnvs } from './config';

createEnvs()

const app = express()
    app.use(express.json())
    app.use(cors())




export default app;