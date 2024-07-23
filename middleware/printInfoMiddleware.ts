import express, { NextFunction, Request, Response } from "express";

const logRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${new Date().toLocaleDateString()} - ${req.path} - ${req.method} - ${res.statusCode} `);
    next()
}

export { logRequestMiddleware }

