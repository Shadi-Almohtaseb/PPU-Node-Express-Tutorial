import { Request, Response } from "express";
import { Book } from "../db/entities/Book.js";

const books = [
    {
        id: 1,
        author: "Diaa abu zenh",
        bookName: "Data Structure"
    },
    {
        id: 2,
        author: "Nabeel 3rman",
        bookName: "Database"
    },
]

const filterArrayController = (req: Request, res: Response) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const filteredArray = arr.filter((item) => item % 2 === 0)

    res.status(200).json({
        message: "success",
        success: true,
        data: filteredArray
    })
}

const getAllBooks = async (req: Request, res: Response) => {
    const books = await Book.find()

    res.json({
        message: "getting all books successfully",
        status: true,
        books: books
    })
}

const createBook = (req: Request, res: Response) => {
    const bookToAdd = req.body

    const newBook = Book.create(bookToAdd).save()

    res.status(201).json({
        message: "created successfully",
        newBook: newBook
    })
}

const deleteBook = (req: Request, res: Response) => {
    const bookId = Number(req.params.id);

    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
        res.status(404).json({
            message: "book not found"
        })
    }

    books.splice(bookIndex, 1)

    res.status(200).json({
        message: "deleted successfully",
        books: books
    })
}

const getSingleBook = (req: Request, res: Response) => {
    const bookId = Number(req.params.id);

    const book = books.find((book) => book.id === bookId)

    if (!book) {
        res.status(404).json({
            message: "book not found"
        })
    }

    res.status(200).json({
        message: "success",
        book: book
    })
}

export { filterArrayController, getAllBooks, createBook, deleteBook, getSingleBook }