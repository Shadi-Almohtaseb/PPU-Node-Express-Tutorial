import { Router } from "express";
import { createLibraryController } from "../controllers/library.js";

const router = Router()

router.post("/", async (req, res, next) => {
    try {
        const library = req.body
        if (!library.name) {
            return res.status(400).json({
                message: "library name is missing",
                success: false,
            })
        }

        const newLibrary = await createLibraryController(library)

        res.status(201).json({
            message: "library created successfully",
            success: true,
            data: newLibrary
        })

    } catch (error) {
        next(error)
    }
})

export default router