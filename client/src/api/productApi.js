import {API,URL} from './config';

export const ProductAPI =  {
  getAll: async function(id){
    return await API.request({
      url:`/products/all`,
      method:'GET',
      params:{
        // name:3
      }
    })
  },
  getByPage: async function(page){
    return await API.request({
      url:`/products`,
      method:'GET',
      params:{
        page
      }
    })
  },
  create: async function(product){
    return await API.post('/products/add',{
      name:product.name,
      description:product.description
    })
  }
}
