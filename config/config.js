module.exports = {
  development: {
    username: 'postgres',             // your actual PostgreSQL username
    password: 'Johsta67!',        // your PostgreSQL password
    database: 'johsta_db',            // ✅ keep this as-is
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
    database: 'johsta_prod',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    logging: false
  }
};
