import axios from "axios";
import { resolveBaseUrl } from ".";

const baseUrl = resolveBaseUrl();

class valueCenterService {
  static getValueCentres(payload) {
    const {period, year} = payload
    return axios.get(`${baseUrl}/api/value_centre/1/${period}/${year}`);
  }
}

export default valueCenterService;
