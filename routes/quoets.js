const express = require("express");
const router = express.Router();
const quotes = require('../services/quotes');
router.get("/",async function(req,res,next){
  try{
    const pageNumber = req.query.page || 1;
    res.json(await quotes.getByPageNumber(pageNumber))
  }catch(err){
    console.error('error while getting quotes', err.message)
    next(err)
  }
})
router.get("/all",async function(req,res,next){
  try{
    const pageNumber = req.query.page || 1;
    res.json(await quotes.getAll(pageNumber))
  }catch(err){
    console.error('error while getting quotes', err.message)
    next(err)
  }
})
router.post("/", async function(req,res,next){
  try{
    res.json(await quotes.create(req.body))
  }catch(err){
    console.error('error while create quote', err.message)
    next(err)
  }
})
module.exports = router;