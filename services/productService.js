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
  const data = await db.query(`select id,quote, author from quote order by updated_at desc`);
  return {
    data
  }
}

function validateCreate(quote){
  let message = [];
  if(!quote){
    message.push('no object is provided')
  }
  if(!quote.name){
    message.push('name is empty')
  }
  if(!quote.description){
    message.push('description is empty')
  }
  if(quote.name && quote.name.length>255){
    message.push('quote cannot be longer than 255 characters')
  }
  if(message.length){
    let error = new Error(message.join())
    error.statusCode = 400;
    throw error;
  }
}
async function create(data){
  validateCreate(data);
  const result = await db.query(`insert into quote(author,quote) values (?,?)`,[data.name,data.description]);
  if(result.affectedRows){
    return ' created successfully'
  }
  return 'error in creating quote'
}

async function deleteOne(id){
  console.log("id:",id)
  const result = await db.query(`delete from quote where id = ?`,[id]);
  if(result.affectedRows){
    return 'delete quote successfully'
  }
  return 'error in deleting quote'
}

module.exports = {
  getByPageNumber,
  getAll,
  create,
  deleteOne
}