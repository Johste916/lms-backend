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
    username: 'postgres.fhphrceciezjvvhbqmgu',                     // ✅ From Transaction Pooler
    password: 'Johsta67!',                                         // ✅ Your Supabase DB password
    database: 'postgres',                                          // ✅ Confirmed from connection string
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',              // ✅ IPv4-compatible Supabase pooler host
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
