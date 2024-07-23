import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("book")
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Column({ length: 255, nullable: false })
    bookName: string;

    @Column({ length: 255, nullable: false })
    author: string
}