import axios from 'axios';
import {resolveBaseUrl} from '.';



const setToken = () => {
    const token = localStorage.getItem('token')
    if (token !== undefined) {
         return {Authorization:`Bearer ${token}`};
      }
}

export const server = axios.create({
  baseURL: resolveBaseUrl(),
  headers: {
      'Content-Type':'application/json', 
      ...setToken()
  }
});


