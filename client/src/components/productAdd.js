import React, { useState } from 'react';
import { Button, Modal,Input } from 'antd';
import {API} from '../api';
import './productAdd.scss';

export const ProductAdd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-add-container">
      <Button type="primary" onClick={showModal}>
        Add
      </Button>
      <Modal title="Create Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input placeholder="product name"/>
        <Input placeholder="product description"/>
      </Modal>
    </div>
  );
};