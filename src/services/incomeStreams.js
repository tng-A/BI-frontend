import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();

class IncomeStreamService {

  static getIncomeStream(productId) {
    return axios.get(
      `${baseUrl}/api/income_stream/1`,
    );
  }
  static postIncomeStream(productId, IncomeStreamData) {
    return axios.post(
      `${baseUrl}/api/income_stream/${[productId]}`,
      IncomeStreamData
    );
  }

  static IncomeStreamTarget(Income_streat_id, TargetData) {
    return axios.post(
      `${baseUrl}/api/income_stream_target/${Income_streat_id}`,
      TargetData
    );
  }

  static getFilteredIncomeStream(periodType, year) {
    return axios.get(
      `${baseUrl}/api/income_stream/1/${periodType}/${year}`,
    );
  }

}

export default IncomeStreamService;
