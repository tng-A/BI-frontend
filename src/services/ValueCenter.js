import axios from "axios";
import { resolveBaseUrl } from ".";

const baseUrl = resolveBaseUrl();

class valueCenterService {
  static getIncomeStream() {
    return axios.get(`${baseUrl}/api/value_centre/1/`);
  }

  static getFilteredByYear(payload) {
    const { period, year } = payload;
    return axios.get(`${baseUrl}/api//income_stream/{revenue_stream_id}/${period}/${year}`);
  }
}

export default valueCenterService;
