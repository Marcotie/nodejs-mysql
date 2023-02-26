import { useState, useEffect } from 'react';
import { Table, Space, Button } from 'antd';
import { ProductAPI } from '../api/productAPI';

export const ProductList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    ProductAPI.getAll().then(res => {
      setProducts(res.data)
    }).catch(err => {
      console.log("err:")
    })
  }, [])
  const handleDelete = (record) => {
    ProductAPI.deleteOne(record.id)
      .then(res => console.log("delete res:", res))
      .catch(err => {
        console.log("delete err:", err)
      })
  }
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
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button>Edit</Button>
          <Button danger onClick={() => handleDelete(record)}>Delete</Button>
        </Space>
      )
    }
  ];
  return (
    <div>
      <Table columns={columns} dataSource={products} rowKey={row => row.id}></Table>
    </div>
  )
}