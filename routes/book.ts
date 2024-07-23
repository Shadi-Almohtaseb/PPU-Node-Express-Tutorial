import { Router } from "express"
import { filterArrayController, getAllBooks, createBook, deleteBook, getSingleBook } from "../controllers/book.js";
import { logRequestMiddleware } from "../middleware/printInfoMiddleware.js";

const router = Router()

router.get("/filter-arr", filterArrayController)
router.get("/", logRequestMiddleware, getAllBooks)
router.post("/", createBook)
router.delete("/:id", deleteBook)
router.get("/:id", getSingleBook)

export default router;
