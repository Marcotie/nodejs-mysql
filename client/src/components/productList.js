import { Table, Space, Button } from 'antd';

export const ProductList = (props) => {
  
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
          <Button onClick={()=>{props.onEdit(record)}}>Edit</Button>
          <Button danger onClick={() => props.onDelete(record)}>Delete</Button>
        </Space>
      )
    }
  ];
  return (
    <div>
      <Table columns={columns} dataSource={props.products} rowKey={row => row.id}></Table>
    </div>
  )
}