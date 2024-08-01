import { Library } from "../db/entities/library.js"

const createLibraryController = async (library: Library) => {
    const libraryExists = await Library.findOne({ where: { name: library.name } })

    if (libraryExists) {
        throw new Error("Library already exists")
    }

    const newLibrary = await Library.create(library).save()

    return newLibrary
}

export { createLibraryController }