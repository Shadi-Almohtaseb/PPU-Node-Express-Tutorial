import { Request, Response } from "express";
import express from 'express';
import env from "dotenv";
import bookRoute from "./routes/book.js"
import authorRoute from "./routes/author.js"
import library from "./routes/library.js"
import dataSource from "./db/dbConfig.js";
import address from "./routes/address.js";
import { customErrorHandler, DefaultErrorHandler } from "./middleware/errorHandler.js";

const app = express();
env.config();
const PORT = process.env.PORT || 5000;
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
})

app.use("/books", bookRoute);
app.use("/author", authorRoute);
app.use("/library", library)
app.use("/address", address)

app.use(customErrorHandler)

app.use(DefaultErrorHandler)

dataSource.initialize().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.error('Failed to connect to DB: ' + err);
});

app.listen(PORT, () => {
    console.log(`server is running on host: http://localhost:${PORT}`);
});

export default app;