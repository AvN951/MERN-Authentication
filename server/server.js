import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express());
app.use(cookieParser());
app.use(cors({credentials:true}));

app.get('/', (req,res)=> res.send("API WORKING"));

app.listen(port, ()=> `Server started on Port : ${port}`)