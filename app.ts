import { Request, Response } from "express";
import express from 'express';
import env from "dotenv";
import bookRoute from "./routes/book.js"
import dataSource from "./db/dbConfig.js";

const app = express();
env.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})

app.use("/books", bookRoute);


dataSource.initialize().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});


app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);
});

export default app;