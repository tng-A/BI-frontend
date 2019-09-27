import {server} from './axiosConfig';
import { resolveBaseUrl } from ".";

const baseUrl = resolveBaseUrl();

class IncomeStreamService {
  static getIncomeStream(productId) {
    return server.get(`/api/income_stream/1`);
  }
  static postIncomeStream(productId, IncomeStreamData) {
    return server.post(
      `/api/income_stream/${[productId]}`,
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
    return server.post(
      `/api/income_stream_target/${IncomeStream}/`,
      tobeSent
    );
  
  }

  static getFilteredIncomeStream(payload) {
    const { year, period, incomeStreamID } = payload;
    return server.get(`/api/income_stream/${incomeStreamID}/${period}/${year}/`);
  }

  static getPeriodsStream(payload) {
    const {companyId} = payload
    return server.get(`/api/period/${companyId}`);
  }
  static getMetricsStream(payload) {
    const {companyId} = payload
    return server.get(`/api/metric/${companyId}`);
  }
}

export default IncomeStreamService;
