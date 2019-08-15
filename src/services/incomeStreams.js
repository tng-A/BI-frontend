import axios from 'axios';
import { resolveBaseUrl } from '.';

const baseUrl = resolveBaseUrl();
console.log('baseUrl', baseUrl);

class IncomeStreamService {
  static postIncomeStream(productId, IncomeStreamData) {
    return axios.post(
      `${baseUrl}/income_stream/${[productId]}`,
      IncomeStreamData
    );
  }

  static IncomeStreamTarget(Income_streat_id, TargetData) {
    return axios.post(
      `${baseUrl}/income_stream_target/${Income_streat_id}`,
      TargetData
    );
  }

}

export default IncomeStreamService;
