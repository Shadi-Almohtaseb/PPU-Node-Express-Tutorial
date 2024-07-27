import { Router, Request, Response, NextFunction } from "express"
import { filterArrayController, getAllBooks, createBook, deleteBook, getSingleBook } from "../controllers/book.js";
import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";

const router = Router()

router.get("/filter-arr", filterArrayController)

router.get("/", logRequestMiddleware, getAllBooks)

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.body.bookName || !req.body.author) {
            return res.status(400).json({
                message: "some fields are missing!!",
                success: false
            })
        }

        const book = await createBook(req.body)

        res.json({
            message: "book created successfully",
            book: book
        })
    } catch (error) {
        console.log("error: " + error);
        next(error)
    }
})


router.delete("/:id", deleteBook)

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const bookId = Number(req.params.id)
        const book = await getSingleBook(bookId)

        console.log("entered");


        res.json({
            message: "book created successfully",
            book: book
        })
    } catch (error) {
        console.log("error: " + error);
        next(error)
    }
})


export default router;
