import {server} from './axiosConfig';

class RevenueStreamsService {
  static getRevenueStreams(payload) {
    const { period, year, revenueID } = payload;
    return server.get(`/api/revenue_stream/${revenueID}/${period}/${year}/`);
  }

  static postRevanueStreamsTarget(payload) {
    const {
      metric,
      amount,
      period_name,
      period_type,
      period_year,
      description,
      IncomeStream
    } = payload;
    const TargetData = {
      metric,
      amount,
      period_name,
      period_type,
      period_year,
      description
    };
    return server.post(
      `/api/revenue_stream_target/${IncomeStream}/`,
      TargetData
    );
  }
}

export default RevenueStreamsService;
