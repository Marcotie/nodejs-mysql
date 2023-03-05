import React,{useState,useEffect} from 'react';
import {UserAPI} from '../api/userAPI';
import {Table} from 'antd';
import {dateFormatYYMMDD} from '../utils/datetime';

export const Users = ()=>{
  const [users, setUsers] = useState([])

  useEffect(() => {
    initUsers();
  }, [])
  const initUsers = ()=>{
    UserAPI.getAll().then(res => {
      setUsers(res.data)
    }).catch(err => {
      console.log("err:")
    })
  }
  const handleAdd =(obj) => {
    UserAPI.create(obj)
    .then(res => {
      initUsers();
    })
    .catch(err=>{
      console.log("err while add user:", err)
    })
  }
  const handleDelete = (record) => {
    UserAPI.deleteOne(record.id)
      .then(res => {
        console.log("delete user res:", res);
        let copy = [...users];
        let index = copy.findIndex(item => item.id == record.id);
        copy.splice(index,1);
        setUsers(copy);
      })
      .catch(err => {
        console.log("delete err:", err)
      })
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render:(value)=>{
        let date = new Date(value);
       return <div>{dateFormatYYMMDD(date)+' '+ date.toLocaleTimeString()}</div>
      }
    },
    {
      title: 'Updated At',
      dataIndex: 'updated_at',
      key: 'updated_at',
      render:(value)=>{
        let date = new Date(value);
       return <div>{dateFormatYYMMDD(date)+' '+ date.toLocaleTimeString()}</div>
      }
    } 
  ];
  return(
    <div className="users-container">
      <h2>User admin:</h2>
      <Table columns={columns} dataSource={users}/>
    </div>
  )
}