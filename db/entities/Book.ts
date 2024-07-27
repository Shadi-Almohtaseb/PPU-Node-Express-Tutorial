import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Author } from "./Author.js";

@Entity("book")
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({ length: 255, nullable: false })
    bookName: string;

    @ManyToOne(() => Author, author => author.books)
    author: Author
}