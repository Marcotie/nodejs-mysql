import React,{useState,useEffect} from 'react';
import {ProductList} from '../components/productList';
import {ProductAdd} from '../components/productAdd';
import {ProductAPI} from '../api/productAPI';
import './products.scss';

export const Products = ()=>{
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({});
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

  const openEdit = (record)=>{
    setProduct(record);
  }
  const handleEdit = (obj)=>{
    console.log("edit:", obj);
    ProductAPI.edit(obj)
    .then(res=>{
      initData();
    })
    .catch(err=>{
      console.log("edit error:", err)
    })
  }

  return(
    <div className="products-container">
      <h2>Product admin:</h2>
      <ProductAdd product={product} onAdd={handleAdd} onEdit={handleEdit}/>
      <ProductList products={products} onDelete={handleDelete} onEdit={openEdit}></ProductList>
    </div>
  )
}