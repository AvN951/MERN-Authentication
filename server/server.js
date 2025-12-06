import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;
connectDB();

// const allowedOrigins = [
//   'http://localhost:5173',
//   process.env.CLIENT_URL || ''
// ];

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173'
];

app.use(express.json());
app.use(cookieParser());
app.use(cors({ 
  origin: allowedOrigins, credentials: true }));

app.get('/api', (req, res) => res.send("API WORKING"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => console.log(`Server started on Port : ${port}`));
