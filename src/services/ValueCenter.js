import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

class valueCenterService {
  static getIncomeStream() {
    return axios.get(`${baseUrl}/api/value_centre/1/`);
  }

  static getFilteredByYear(type, year) {
    return axios.get(`${baseUrl}/api/value_centre/1/${type}/${year}`);
  }
}

export default valueCenterService;
