import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import authRouter from './routes/user.routes.js';
import cookieParser from 'cookie-parser'
import studentRouter from "./routes/students.routes.js"




const app = express()
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRouter)
app.use("/api/students", studentRouter)




export default app;