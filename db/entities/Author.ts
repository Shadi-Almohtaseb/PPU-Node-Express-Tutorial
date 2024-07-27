import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book.js";

@Entity("author")
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 255 })
    name: string

    @Column( { length: 255 })
    email: string

    @Column({ length: 255 })
    password: string

    @Column({ length: 255, nullable: true })
    phone: string

    @OneToMany(() => Book, book => book.author)
    books: Book[]
}