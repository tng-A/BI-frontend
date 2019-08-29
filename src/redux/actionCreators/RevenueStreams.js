import {
  GET_REVENUE_STREAMS,
  GET_REVENUE_STREAMS_SUCCESS,
  GET_REVENUE_STREAMS_FAILURE,
  CREATE_REVENUE_STREAMS_TARGET,
  CREATE_REVENUE_STREAMS_TARGET_SUCCESS,
  CREATE_REVENUE_STREAMS_TARGET_FAILURE
} from "../ActionTypes/RevenueStreams";

export const getRevenueStreams = payload => ({
  type: GET_REVENUE_STREAMS,
  payload
});

export const getRevenueStreamsSuccess = payload => ({
  type: GET_REVENUE_STREAMS_SUCCESS,
  payload
});

export const getRevenueStreamsFailure = error => ({
  type: GET_REVENUE_STREAMS_FAILURE,
  error
});

export const createRevenueStreamsTarget = payload => ({
  type: CREATE_REVENUE_STREAMS_TARGET,
  payload
});

export const createRevenueStreamsTargetSuccess = payload => ({
  type: CREATE_REVENUE_STREAMS_TARGET_SUCCESS,
  payload
});

export const createRevenueStreamsTargetFailure = error => ({
  type: CREATE_REVENUE_STREAMS_TARGET_FAILURE,
  error
});
