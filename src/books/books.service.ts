import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
	constructor(@Inject('BOOK_REPOSITORY') private bookRepository: Repository<Book>) { }

	async create(book: CreateBookDto) {
		return await this.bookRepository.insert(book)
	}

	async findAll(): Promise<Book[]> {
		return await this.bookRepository.find()
	}

	async findOne(id: string): Promise<Book> {
		return await this.bookRepository.findOne({ where: { id } })
	}

	async update(id: string, updateBookDto: UpdateBookDto) {
		return await this.bookRepository.update(id, updateBookDto)
	}

	async remove(id: string) {
		return await this.bookRepository.delete(id)
	}
}
