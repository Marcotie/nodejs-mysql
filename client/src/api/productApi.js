import {API} from './index';
import {URL} from './config';

export const ProductAdd = async ()=>{
  try{
    const res = await API.post(URL.product);
  }
}