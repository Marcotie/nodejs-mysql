import React, { useState,useEffect } from 'react';
import { Button, Modal, Input } from 'antd';
import { ProductAPI } from '../api/productAPI';
import './productAdd.scss';

export const ProductAdd = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType,setActionType] = useState('Add');
  useEffect(() => {
    if(props.product.id){
      setIsModalOpen(true);
      let needEditedObj ={
        name: props.product.author,
        description: props.product.quote,
        id:props.product.id
      }
      setObj(needEditedObj);
      setActionType('Edit')
    }
  }, [props.product])
  const [obj,setObj] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    if(actionType == 'Add'){
      props.onAdd(obj);
    }else{
      props.onEdit(obj);
    }
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
      <Modal title={actionType} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="name" value={obj.name} onChange={handleName} />
        <Input placeholder="description" value={obj.description} onChange={handleDescription} />
      </Modal>
    </div>
  );
};