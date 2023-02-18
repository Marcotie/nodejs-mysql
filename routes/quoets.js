const express = require("express");
const router = express.Router();
const quotes = require('../services/quotes');
router.get("/",async function(req,res,next){
  try{
    const pageNumber = req.query.page || 1;
    res.json(await quotes.getMultiple(pageNumber))
  }catch(err){
    console.error('error while getting quotes', err.message)
    next(err)
  }
})
module.exports = router;