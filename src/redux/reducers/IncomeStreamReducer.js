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

const initialState = {
  IncomeStreamData: {},
  IncomeStreamTargetData: {},
  incomeStreams: [],
  loading: false,
  disabled: true,
  isSaving: false,
  modal: false,
  periods: [],
  metrics: []
};

const incomeStream = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INCOME_STREAM:
      return { ...state, loading: true };
    case CREATE_INCOME_STREAM_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    case CREATE_INCOME_STREAM_SUCCESS:
      return { ...state, loading: false, IncomeStreamData: action.data };
    case CREATE_INCOME_STREAM_TARGET:
      return { ...state, loading: true };
    case CREATE_INCOME_STREAM_TARGET_SUCCESS:
      return {
        ...state,
        IncomeStreamTargetData: action.payload.data,
        loading: false
      };
    case CREATE_INCOME_STREAM_TARGET_FAILURE:
      return { ...state, errors: action.errors, loading: false };
    case GET_FILTERED_INCOME_STREAM:
      return { ...state, loading: true };
    case GET_FILTERED_INCOME_STREAM_SUCCESS:
      return { ...state, incomeStreams: action.incomeStream, loading: false };
    case GET_FILTERED_INCOME_STREAM_FAILURE:
      return { ...state, incomeStreams: null, loading: false };
    case GET_PERIODS:
      return { ...state, loading: true };
    case GET_PERIODS_SUCCESS:
      return { ...state, loading: false, periods: action.payload.data };
    case GET_PERIODS_FAILURE:
      return { ...state, loading: false, periods: [] };
    case GET_METRIC:
      return { ...state, loading: true };
    case GET_METRIC_SUCCESS:
      return { ...state, loading: false, metrics: action.payload.data };
    case GET_METRIC_FAILURE:
      return { ...state, loading: false, metrics: [] };
    default:
      return state;
  }
};

export default incomeStream;
