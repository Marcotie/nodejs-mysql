import {useState, useEffect} from 'react';
import {API} from '../api';
import {Table} from 'antd';

export const ProductList = ()=>{
  const [products, setProducts] = useState([])
  useEffect(()=>{
    API.get('/products').then(res=>{
      setProducts(res.data)
    }).catch(err=>{
      console.log("err:")
    })
  },[])
  const columns = [
    {
      title: 'Name',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Description',
      dataIndex: 'quote',
      key: 'address',
    },
  ];
  return(
    <div>
      <Table columns={columns} dataSource={products}></Table>
    </div>
  )
}