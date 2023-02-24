import {useState, useEffect} from 'react';
import {Table} from 'antd';
import {ProductAPI} from '../api/productAPI';

export const ProductList = ()=>{
  const [products, setProducts] = useState([])
  useEffect(()=>{
    ProductAPI.getAll().then(res=>{
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
      <Table columns={columns} dataSource={products} rowKey={row=>row.id}></Table>
    </div>
  )
}