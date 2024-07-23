import express, { NextFunction, Request, Response } from "express";

const logRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("this is a middleware");
    next()
}

export { logRequestMiddleware }