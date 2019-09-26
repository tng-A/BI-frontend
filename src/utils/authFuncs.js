import jwt_decode from 'jwt-decode';


class AuthUtils {

  static verifyToken(token) {
    return jwt_decode(token);
  }
  static logout(){
    localStorage.clear()
  }

  static checkExpiry(token){
   
      const { exp } = token
      if (exp) {
        const now = new Date();
        const nowInSec = Math.floor(now.getTime() * 0.001); // Convert date to sec
        return nowInSec < exp;
      }
    }
}



export default AuthUtils;
