import axios from 'axios'; 
import {resolveBaseUrl} from '.'

const baseUrl = resolveBaseUrl()

class productService{
    static getProduct(){
        return axios.get(`${baseUrl}/api/product/1`)
    }
}

export default productService