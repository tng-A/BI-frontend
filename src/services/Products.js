import {server} from './axiosConfig';


class productsService {
  static getProducts(productId) {
    return server.get(`/api/products/1`);
  }
  static postProducts(valueCenterId, productsData) {
    return server.post(
      `/api//${[valueCenterId]}`,
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
   
    return server.post(
      `/api/product_target/${IncomeStream}/`,
      tobeSent
    );
  }

  static getFilteredProducts(payload) {
    const { year, period, productID } = payload;
    return server.get(`/api/product/${productID}/${period}/${year}/`);
  }

  static getPeriodsProduct() {
    return server.get(`/api/period/`);
  }
  static getMetricsProduct() {
    return server.get(`/api/metric/`);
  }
}

export default productsService;
