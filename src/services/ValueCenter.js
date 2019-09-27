import {server} from './axiosConfig';


class valueCenterService {
  static getValueCentres(payload) {
    const { period, year } = payload;
    
    return server.get(`/api/value_centre/1/${period}/${year}`);
  }

  static createValueCenterTargets(payload) {
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
    return server.post(`/api/value_centre_target/${IncomeStream}/`,TargetData);
  }
}

export default valueCenterService;
