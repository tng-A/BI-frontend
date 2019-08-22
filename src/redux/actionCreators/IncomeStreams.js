import {
  CREATE_INCOME_STREAM,
  CREATE_INCOME_STREAM_SUCCESS,
  CREATE_INCOME_STREAM_FAILURE,
  CREATE_INCOME_STREAM_TARGET,
  CREATE_INCOME_STREAM_TARGET_SUCCESS,
  CREATE_INCOME_STREAM_TARGET_FAILURE,
  GET_FILTERED_INCOME_STREAM,
  GET_FILTERED_INCOME_STREAM_SUCCESS,
  GET_FILTERED_INCOME_STREAM_FAILURE,
  GET_PERIODS,
  GET_PERIODS_SUCCESS,
  GET_PERIODS_FAILURE,
  GET_METRIC,
  GET_METRIC_SUCCESS,
  GET_METRIC_FAILURE
} from "../ActionTypes/IncomeStream";

export const getMetrics = payload => ({
  type: GET_METRIC,
  payload
});

export const getMetricsSuccess = payload => ({
  type: GET_METRIC_SUCCESS,
  payload
});

export const getMetricsFailure = error => ({
  type: GET_METRIC_FAILURE,
  error
});
export const getPeriods = payload => ({
  type: GET_PERIODS,
  payload
});

export const getPeriodsSuccess = payload => ({
  type: GET_PERIODS_SUCCESS,
  payload
});

export const getPeriodFailure = error => ({
  type: GET_PERIODS_FAILURE,
  error
});

export const CreateIncomeStream = incomeStreamData => ({
  type: CREATE_INCOME_STREAM,
  incomeStreamData
});

export const CreateIncomeStreamSuccess = incomeStreamData => ({
  type: CREATE_INCOME_STREAM_SUCCESS,
  incomeStreamData
});

export const CreateIncomeFailure = error => ({
  type: CREATE_INCOME_STREAM_FAILURE,
  error
});

export const CreateIncomeStreamTarget = payload => ({
  type: CREATE_INCOME_STREAM_TARGET,
  payload
});

export const CreateIncomeStreamTargetSuccess = payload => ({
  type: CREATE_INCOME_STREAM_TARGET_SUCCESS,
  payload
});

export const CreateIncomeStreamTargetFailure = error => ({
  type: CREATE_INCOME_STREAM_TARGET_FAILURE,
  error
});

export const getFilteredIncomeStream = (periodType, year) => ({
  type: GET_FILTERED_INCOME_STREAM,
  periodType,
  year
});

export const getFilteredIncomeStreamSuccess = incomeStream => ({
  type: GET_FILTERED_INCOME_STREAM_SUCCESS,
  incomeStream
});

export const getFilteredIncomeStreamFailure = error => ({
  type: GET_FILTERED_INCOME_STREAM_FAILURE,
  error
});
