import { Router, Request, Response, NextFunction } from "express"
import { filterArrayController, getAllBooks, createBook, deleteBook, getSingleBook } from "../controllers/book.js";
import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";

const router = Router()

router.get("/filter-arr", filterArrayController)

router.get("/", logRequestMiddleware, getAllBooks)

router.post("/", createBook)


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
        next()
    }
})


export default router;
