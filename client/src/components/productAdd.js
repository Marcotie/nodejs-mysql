import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { ProductAPI } from '../api/productAPI';
import './productAdd.scss';

export const ProductAdd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [obj,setObj] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    ProductAPI.create(obj)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleName = (e)=>{
    setObj(Object.assign({},obj,{name:e.target.value}))
  }

  const handleDescription =(e)=>{
    setObj(Object.assign({},obj,{description:e.target.value}))
  }
  return (
    <div className="product-add-container">
      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal title="Create Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="name" value={obj.name} onChange={handleName} />
        <Input placeholder="description" value={obj.description} onChange={handleDescription} />
      </Modal>
    </div>
  );
};