import React,{useState,useEffect} from 'react';
import {ProductList} from '../components/productList';
import {ProductAdd} from '../components/productAdd';
import {ProductAPI} from '../api/productAPI';
import './products.scss';

export const Products = ()=>{
  const [products, setProducts] = useState([])
  useEffect(() => {
    initData();
  }, [])
  const initData = ()=>{
    ProductAPI.getAll().then(res => {
      setProducts(res.data)
    }).catch(err => {
      console.log("err:")
    })
  }
  const handleAdd =(obj) => {
    ProductAPI.create(obj)
    .then(res => {
      initData();
    })
    .catch(err=>{
      console.log("err while add:", err)
    })
  }
  const handleDelete = (record) => {
    ProductAPI.deleteOne(record.id)
      .then(res => {
        console.log("delete res:", res);
        let copy = [...products];
        let index = copy.findIndex(item => item.id == record.id);
        copy.splice(index,1);
        setProducts(copy);
      })
      .catch(err => {
        console.log("delete err:", err)
      })
  }

  return(
    <div className="products-container">
      <h2>Product admin:</h2>
      <ProductAdd onAdd={handleAdd}/>
      <ProductList products={products} onDelete={handleDelete}></ProductList>
    </div>
  )
}