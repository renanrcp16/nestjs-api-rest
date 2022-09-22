import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Book {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column('text')
	code: string
	
	@Column('text')
	name: string
	
	@Column('float')
	price: number
}
