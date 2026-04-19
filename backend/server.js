import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './Routes/user.route.js';
import cookieParser from 'cookie-parser';
import { savedRoutes } from './Routes/saved.route.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
	cors({
		origin: process.env.Frontend_URL || "http://localhost:5173",
		credentials: true,
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/api/user', userRoutes);
app.use('/api/saved', savedRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});