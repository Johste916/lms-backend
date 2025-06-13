require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: 'Johsta67!',
    database: 'johsta_db',
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
    username: 'postgres.fhphrceciezjvvhbqmgu', // ✅ copy EXACTLY from your Supabase pooler string
    password: 'Johsta67!',                     // ✅ your Supabase DB password
    database: 'postgres',
    host: 'aws-0-ap-southeast-1.pooler.supabase.com', // ✅ IPv4-compatible pooler host
    port: 5432,
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
