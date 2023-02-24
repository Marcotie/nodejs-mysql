import React from 'react';
import {ProductList} from '../components/productList';
import {ProductAdd} from '../components/productAdd';
import './products.scss';

export const Products = ()=>{
  return(
    <div className="products-container">
      <h2>Product admin:</h2>
      <ProductAdd/>
      <ProductList></ProductList>
    </div>
  )
}