import axios from "axios";
import { resolveBaseUrl } from ".";

const baseUrl = resolveBaseUrl();

class productsService {
  static getProducts(productId) {
    return axios.get(`${baseUrl}/api/products/1`);
  }
  static postProducts(valueCenterId, productsData) {
    return axios.post(
      `${baseUrl}/api//${[valueCenterId]}`,
      productsData
    );
  }

  static productTarget(payload) {
    const {
      metric,
      amount,
      period_name,
      period_type,
      period_year,
      description,
      IncomeStream
    } = payload;
    const tobeSent = {
      metric,
      amount,
      period_name,
      period_type,
      period_year,
      description
    };
   
    return axios.post(
      `${baseUrl}/api/product_target/${IncomeStream}/`,
      tobeSent
    );
  }

  static getFilteredProducts(payload) {
    const { year, period, productID, nextProductID } = payload;
    if(productID){
      return axios.get(`${baseUrl}/api/product/${productID}/${period}/${year}/`);
    }else{
      return axios.get(`${baseUrl}/api/product/${nextProductID}/${period}/${year}/`);
    }
   
  }

  static getPeriodsProduct() {
    return axios.get(`${baseUrl}/api/period/`);
  }
  static getMetricsProduct() {
    return axios.get(`${baseUrl}/api/metric/`);
  }
}

export default productsService;
