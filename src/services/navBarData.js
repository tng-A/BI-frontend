import {server} from './axiosConfig';

class navBarSevice {
  
  static getNavbarData(payload) {
      const {companyId} = payload
    return server.get(`/api/nav/${companyId}`);
  }
}

export default navBarSevice;
