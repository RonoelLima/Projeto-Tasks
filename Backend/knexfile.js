module.exports = {
	client: 'postgresql',
	connection: {
		database: 'postgres',
		user: 'postgres',
		password: '209201'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
