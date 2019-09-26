import axios from "axios";
import { resolveBaseUrl } from ".";

const baseUrl = resolveBaseUrl();

class AuthenticationService {

    static loginEndpoint(payload){
     const {
         email, password
     } = payload  
      const expected = {
          email, 
          password
      }
     return axios.post(
        `${baseUrl}/api/login/`,
       expected
      );
     }

     static registerEndpoint(payload){
        const {
            email, username, password, companyName
        } = payload
        const expected = {email, username, password, company:companyName}
        return axios.post(
           `${baseUrl}/api/register/`,
           expected
         );
        }
}

export default AuthenticationService;