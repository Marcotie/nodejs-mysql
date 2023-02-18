const env = process.env;

const config = {
  db:{
    host:env.DB_HOST || '',
    user:env.DB_USER || 'root',
    password: env.DB_PASSWORD || 'boxing',
    database : env.DB_NAME || 'demo',
    waitForConnections:true,
    connectionLimit:env.DB_CONN_LIMIT || 2,
    queueLimit:0,
    debug:env.DB_DEBUG || false
  },
  listPerPage: env.LIST_PER_PAGE || 5}
module.exports = config;