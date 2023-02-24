import axios from 'axios';
const host = 'localhost';
const port = '3000';


export const API =axios.create({
  baseURL: `http://${host}:${port}`,
})

// 添加请求拦截器
API.interceptors.request.use(function (config) {
  console.log("request interceptor:")
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 添加响应拦截器
API.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  console.log("response interceptor:", response)
  return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  console.log("error handle:",error)
  return Promise.reject(error);
});