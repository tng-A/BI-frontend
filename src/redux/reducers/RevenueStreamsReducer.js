import {
  GET_REVENUE_STREAMS,
  GET_REVENUE_STREAMS_SUCCESS,
  GET_REVENUE_STREAMS_FAILURE,
  CREATE_REVENUE_STREAMS_TARGET,
  CREATE_REVENUE_STREAMS_TARGET_SUCCESS,
  CREATE_REVENUE_STREAMS_TARGET_FAILURE
} from "../ActionTypes/RevenueStreams";

const initialState = {
  RevenueStreams: [],
  isLoading: false,
  RevenueStreamsTraget: {}
};

const revenueStreamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVENUE_STREAMS:
      return { ...state, isLoading: true };
    case GET_REVENUE_STREAMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        RevenueStreams: action.payload.data
      };
    case GET_REVENUE_STREAMS_FAILURE:
      return { ...state, isLoading: false, errors: action.error };
    case CREATE_REVENUE_STREAMS_TARGET:
      return { ...state, isLoading: true };
    case CREATE_REVENUE_STREAMS_TARGET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        RevenueStreamsTraget: action.payload.data
      };
    case CREATE_REVENUE_STREAMS_TARGET_FAILURE:
      return { ...state, isLoading: false, errors: action.error };
    default:
      return state;
  }
};

export default revenueStreamsReducer;
