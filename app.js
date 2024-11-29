import bodyParser from "body-parser";
import express from "express";
import authRoutes from './routes/authRoutes.js'

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/auth", authRoutes);


app.get("/", (req, res) =>{
    res.send("ToDo App Backend is running!");
});

export default app;

