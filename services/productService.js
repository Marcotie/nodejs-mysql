const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getByPageNumber(page = 1){
  
  const offset = helper.getOffset(page, config.listPerPage);
  console.log("offset:,",offset)
  const data = await db.query(`select id,quote, author from quote limit ${offset},${config.listPerPage}`);

  const meta = {page:2};
  return {
    data,
    meta
  }
}

async function getAll(){
  const data = await db.query(`select id,quote, author from quote`);
  console.log("data:",data)
  return {
    data
  }
}

function validateCreate(quote){
  let message = [];
  if(!quote){
    message.push('no object is provided')
  }
  if(!quote.quote){
    message.push('quote is empty')
  }
  if(!quote.author){
    message.push('author is empty')
  }
  if(quote.quote && quote.quote.length>255){
    message.push('quote cannot be longer than 255 characters')
  }
  if(message.length){
    let error = new Error(message.join())
    error.statusCode = 400;
    throw error;
  }
}
async function create(quote){
  validateCreate(quote);
  const result = await db.query(`insert into quote(quote, author) values (${quote.quote}, ${quote.author})`);
  if(result.affectedRows){
    return 'quote created successfully'
  }
  return 'error in creating quote'
}

module.exports = {
  getByPageNumber,
  getAll,
  create
}