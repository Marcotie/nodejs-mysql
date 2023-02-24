const express = require("express");
const router = express.Router();
const productService = require('../services/productService');
router.get("/",async function(req,res,next){
  try{
    const pageNumber = req.query.page || 1;
    res.json(await productService.getByPageNumber(pageNumber))
  }catch(err){
    console.error('error while getting products', err.message)
    next(err)
  }
})
router.get("/all",async function(req,res,next){
  try{
    res.json(await productService.getAll())
  }catch(err){
    console.error('error while getting products', err.message)
    next(err)
  }
})
router.post("/add", async function(req,res,next){
  try{
    res.json(await productService.create(req.body))
  }catch(err){
    console.error('error while create products', err.message)
    next(err)
  }
})
module.exports = router;