import { BaseEntity, BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book.js";
import { Address } from "./Address.js";
import bcrypt from "bcrypt"

@Entity("author")
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ length: 255 })
    name: string

    @Column({ length: 255 })
    email: string

    @BeforeInsert()
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }

    @Column({ length: 255 })
    password: string

    @Column({ length: 255, nullable: true })
    phone: string

    @OneToMany(() => Book, book => book.author)
    books: Book[]

    @OneToOne(() => Address, address => address.author)
    @JoinColumn(
        {
            name: "addressId",
            referencedColumnName: "id"
        }
    )
    address: Address
}