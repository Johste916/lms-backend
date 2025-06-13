module.exports = {
  development: {
    username: 'postgres',
    password: 'Johsta67!',
    database: 'johsta_db', // local dev DB
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    logging: false
  },

  test: {
    username: 'postgres',
    password: 'Johsta67!',
    database: 'johsta_test',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    logging: false
  },

  production: {
    username: 'postgres',
    password: 'Johsta67!',
    database: 'postgres',
    host: 'db.fhphrceciezjvvhbqmgu.supabase.co',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false
  }
};
