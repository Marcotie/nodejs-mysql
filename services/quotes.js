const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  
  const offset = helper.getOffset(page, config.listPerPage);
  console.log("offset:,",offset)
  const data = await db.query(`select id,quote, author from quote limit ${offset},${config.listPerPage}`);

  const meta = {page:2};
  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}