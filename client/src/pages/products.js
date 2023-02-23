import React from 'react';
import {ProductList} from '../components/productList';
import {Button} from 'antd';
import {API} from '../api';
import {ProductAdd} from '../components/productAdd';
import './products.scss';

export const Products = ()=>{
  function handleAdd(){
    API.post('/product/add').then(res=>{
      console.log("add product success,")
    }).catch(err=>{
      console.log("add product got err:", err)
    })
  }
  return(
    <div className="products-container">
      <h2>Product admin:</h2>
      <ProductAdd/>
      <ProductList></ProductList>
    </div>
  )
}