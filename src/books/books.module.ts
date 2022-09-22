import { bookProviders } from './books.providers';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
	imports: [DatabaseModule],
	controllers: [BooksController],
	providers: [...bookProviders, BooksService]
})
export class BooksModule {}