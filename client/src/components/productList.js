import {useState, useEffect} from 'react';
import {API} from '../api';

export const ProductList = ()=>{
  const [products, setProducts] = useState([])
  useEffect(()=>{
    API.get('/products').then(res=>{
      console.log("resss:", res)
      setProducts(res.data)
    }).catch(err=>{
      console.log("err:")
    })
  },[])

  return(
    <div>
      <h2>Products:</h2>
      <div>
        {products.map((product)=>{
          return(
            <>
            <div>{product.id}</div>
            <div>{product.quote}</div>
            </>
          )
        })}
      </div>
    </div>
  )
}