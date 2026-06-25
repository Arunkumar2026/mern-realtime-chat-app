import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import User from './models/User.js';
import authRoutes from './routes/authRoutes.js';
import protect from './middleware/authMiddleware.js';
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js';



dotenv.config();

connectDB();

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is Chats API Running...");
});

app.get("/api/profile", protect, (req, res) => {
    res.json(req.user);
});

app.use("/api/auth", authRoutes);

app.use("/api/messages", messageRoutes);


app.use("/api/users" ,userRoutes);


console.log(User.modelName);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on prot ${PORT}`);
});