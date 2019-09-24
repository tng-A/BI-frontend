import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

class navBarSevice {
  static getNavbarData(payload) {
      const {companyId} = payload
    return axios.get(`${baseUrl}/api/nav/${companyId}`);
  }
}

export default navBarSevice;
