import axios from "axios";
import { resolveBaseUrl } from ".";

const baseUrl = resolveBaseUrl();

class AuthenticationService {

    static loginEndpoint(payload){
     const {
         email, password
     } = payload   
     return axios.post(
        `${baseUrl}/api/login`,
        payload
      );
     }

     static registerEndpoint(payload){
        const {
            email, username, password, companyName
        } = payload
        return axios.post(
           `${baseUrl}/api/register`,
           payload
         );
        }
}

export default AuthenticationService;