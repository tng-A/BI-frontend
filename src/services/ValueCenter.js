import axios from "axios";
import { resolveBaseUrl } from ".";

const baseUrl = resolveBaseUrl();

class valueCenterService {
  static getIncomeStream() {
    return axios.get(`${baseUrl}/api/value_centre/1/`);
  }
}

export default valueCenterService;
