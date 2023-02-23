const express = require("express");
const router = express.Router();
const products = require('../services/products');
router.get("/",async function(req,res,next){
  try{
    const pageNumber = req.query.page || 1;
    res.json(await products.getByPageNumber(pageNumber))
  }catch(err){
    console.error('error while getting products', err.message)
    next(err)
  }
})
router.get("/all",async function(req,res,next){
  try{
    const pageNumber = req.query.page || 1;
    res.json(await products.getAll(pageNumber))
  }catch(err){
    console.error('error while getting products', err.message)
    next(err)
  }
})
router.post("/", async function(req,res,next){
  try{
    res.json(await products.create(req.body))
  }catch(err){
    console.error('error while create products', err.message)
    next(err)
  }
})
module.exports = router;