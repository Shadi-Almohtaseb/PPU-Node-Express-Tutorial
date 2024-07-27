import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book.js";

@Entity("author")
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 255 })
    name: string

    @Column()
    email: string

    @Column({ length: 255 })
    password: string

    @Column({ length: 255 })
    phone: string
    
    @Column({ length: 537 })
    test: string

    @OneToMany(() => Book, book => book.author)
    books: Book[]
}