const express = require("express");
const router = express.Router();
const productService = require('../services/productService');
// router.get("/",async function(req,res,next){
//   try{
//     const pageNumber = req.query.page || 1;
//     res.json(await productService.getByPageNumber(pageNumber))
//   }catch(err){
//     console.error('error while getting products', err.message)
//     next(err)
//   }
// })
router.get("/all",async function(req,res,next){
  try{
    res.json(await productService.getAll())
  }catch(err){
    console.error('error while getting products', err.message)
    next(err)
  }
})

router.get("/getProduct",async function(req,res,next){
  try{
    let id = req.query.id;
    if(Boolean(id) == false){
      res.json("no id provided")
    }
    res.json(await productService.getById(id))
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

router.delete("/delete", async function(req,res,next){
  try{
    let response = await productService.deleteOne(req.body.id);
    res.json(response)
  }catch(err){
    console.error('error while delete product',err.message);
    next(err);
  }
})

router.post("/edit", async function(req,res,next){
  try{
    let oldData = await productService.getById(req.body.id);
    if(Boolean(oldData.id) == false){
      next("not existed")
    }
    if(req.body.author.length==0 || req.body.quote.length==0){
      next("author or quote should not be empty")
    }
    res.json(await productService.edit(oldData.id, req.body))
  }catch(err){
    console.error('error while delete product',err.message);
    next(err);
  }
})
module.exports = router;