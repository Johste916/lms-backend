require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: 'Johsta67!',
    database: 'Johsta',
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
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};
