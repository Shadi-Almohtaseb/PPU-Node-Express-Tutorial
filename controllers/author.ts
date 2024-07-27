import { Author } from "../db/entities/Author.js";
import { AppError } from "../errors/AppErrors.js";
import bcrypt from "bcrypt";

const createAuthorController = async (payload: Author) => {
    const author = await Author.findOne({ where: { email: payload.email }})

    if(author){
        throw new AppError("author already exists", 409, true)
    }

    payload.password = await bcrypt.hash(payload.password, 10)

    const newAuthor = await Author.create(payload).save()

    return newAuthor
}

export {createAuthorController}