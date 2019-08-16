import axios from "axios";
import { resolveBaseUrl } from ".";

const baseUrl = resolveBaseUrl();

class TransactionService {
  static getTransactions() {
    return axios.get(`${baseUrl}/`);
  }
}

export default TransactionService;
