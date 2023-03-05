var express = require('express');
var router = express.Router();
const userService = require("../services/userService");

/* GET users listing. */
router.get("/getUsers", async function(req,res,next){
  try{
    console.log("here:")
    let response = await userService.getAll();
    res.json(response);
  }catch(err){
    console.log("error while getting user list", err.message)
    next(err);
  }
})

module.exports = router;
export {};