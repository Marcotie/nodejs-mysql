import { API, URL } from './config';

export const UserAPI = {
  getAll: async function (id) {
    return await API.request({
      url: `/users/getUsers`,
      method: 'GET',
      params: {
        // name:3
      }
    })
  },
  getByPage: async function (page) {
    return await API.request({
      url: `/products`,
      method: 'GET',
      params: {
        page
      }
    })
  },
  create: async function (product) {
    return await API.post('/products/add', {
      name: product.name,
      description: product.description
    })
  },
  deleteOne: async function (id) {
    return await API.delete('/products/delete', {
      data: {
        id: id
      }
    })
  },
  edit: async function (obj) {
    return await API.post('/products/edit',
      {
        id: obj.id,
        author: obj.name,
        quote: obj.description
      })
  }
}
