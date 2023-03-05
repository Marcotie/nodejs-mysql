const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAll(){
  const data = await db.query(`select id,username,created_at,updated_at from users order by updated_at desc`);
  return {
    data
  }
}

function validateCreate(user){
  let message = [];
  if(!user){
    message.push('no object is provided')
  }
  if(!user.name){
    message.push('name is empty')
  }
  if(!user.description){
    message.push('description is empty')
  }
  if(user.name && user.name.length>255){
    message.push('user cannot be longer than 255 characters')
  }
  if(message.length){
    let error:Error = new Error(message.join())
    throw error;
  }
}
async function create(data){
  validateCreate(data);
  const result = await db.query(`insert into users(username,password) values (?,?)`,[data.username,data.password]);
  if(result.affectedRows){
    return ' created successfully'
  }
  return 'error in creating user'
}

async function deleteOne(id){
  const result = await db.query(`delete from users where id = ?`,[id]);
  if(result.affectedRows){
    return 'delete user successfully'
  }
  return 'error in deleting user'
}

async function getById(id){
  const result = await db.query(`select * from users where id = ?`,[id]);
  if(result[0]){
    return result[0]
  }
  return 'id not exist'
}
async function edit(id, obj){
  const result = await db.query(`update users set username = ?, password = ?, updated_at = ? where id = ?`,[obj.username, obj.password, new Date(), id]);
  if(result.affectedRows){
    return 'update successfully'
  }
  return 'error in updating user'
}

module.exports = {
  getAll,
  create,
  deleteOne,
  getById,
  edit
}
export{};