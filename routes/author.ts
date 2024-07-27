import e, { Router, Request, Response, NextFunction } from "express";
import { createAuthorController } from "../controllers/author.js";

const router = Router()

router.post("/", async (req: Request, res: Response, next:NextFunction) => {
    try {
        if (!req.body.name || !req.body.email ||!req.body.password) {
            res.status(400).json({
                message: "some fields are missing",
                success: false
            })
        }

        const author =  await createAuthorController(req.body)

        res.status(201).json({
            message: "Author created successfully",
            author: author
        })

    } catch (error) {
        next(error)
    }
})

export default router