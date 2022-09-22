import { DataSource } from 'typeorm';

export const databaseProviders = [
	{
		provide: 'DATA_SOURCE',
		useFactory: async () => {
			const dataSource = new DataSource({
				type: process.env.DB_DEV_TYPE as any,
				host: process.env.DB_DEV_HOST,
				port: parseInt(process.env.DB_DEV_PORT),
				username: process.env.DB_DEV_USERNAME,
				password: process.env.DB_DEV_PASSWORD,
				database: process.env.DB_DEV_DATABASE,
				entities: [
					__dirname + '/../**/*.entity{.ts,.js}',
				],
				synchronize: true,
			});

			return dataSource.initialize();
		},
	},
];