import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

class valueCenterService {
  static getIncomeStream() {
    return axios.get(`${baseUrl}/api/value_centre/1/`);
  }

  static getFilteredByYear(periodType, year) {
    return axios.get(`${baseUrl}/api/value_centre/1/${periodType}/${year}`);
  }
}

export default valueCenterService;
