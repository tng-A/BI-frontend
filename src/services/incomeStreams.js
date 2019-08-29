import axios from "axios";
import { resolveBaseUrl } from ".";

const baseUrl = resolveBaseUrl();

class IncomeStreamService {
  static getIncomeStream(productId) {
    return axios.get(`${baseUrl}/api/income_stream/1`);
  }
  static postIncomeStream(productId, IncomeStreamData) {
    return axios.post(
      `${baseUrl}/api/income_stream/${[productId]}`,
      IncomeStreamData
    );
  }

  static IncomeStreamTarget(payload) {
    const {
      metric,
      amount,
      period_name,
      period_type,
      period_year,
      description,
      IncomeStream
    } = payload;
    
    const tobeSent = {
      metric,
      amount,
      period_name,
      period_type,
      period_year,
      description
    };
    return axios.post(
      `${baseUrl}/api/income_stream_target/${IncomeStream}/`,
      tobeSent
    );
  
  }

  static getFilteredIncomeStream(payload) {
    const { year, period, incomeStreamID } = payload;
    return axios.get(`${baseUrl}/api/income_stream/${incomeStreamID}/${period}/${year}/`);
  }

  static getPeriodsStream() {
    return axios.get(`${baseUrl}/api/period/`);
  }
  static getMetricsStream() {
    return axios.get(`${baseUrl}/api/metric/`);
  }
}

export default IncomeStreamService;
