const dbConfig = {
  username: process.env.USER_SQL,
  password: process.env.PASS_SQL,
  database: process.env.DATABASE,
  host: process.env.HOST_SQL,
  dialect: 'mysql',
};

module.exports = {
  development: dbConfig,
  production: dbConfig,
};
