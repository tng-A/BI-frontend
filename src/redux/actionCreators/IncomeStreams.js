import {
  CREATE_INCOME_STREAM,
  CREATE_INCOME_STREAM_SUCCESS,
  CREATE_INCOME_STREAM_FAILURE,
  CREATE_INCOME_STREAM_TARGET,
  CREATE_INCOME_STREAM_TARGET_SUCCESS,
  CREATE_INCOME_STREAM_TARGET_FAILURE
} from "../ActionTypes/IncomeStream";

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

export const CreateIncomeStreamTarget = incomeStreamTargetData => ({
  type: CREATE_INCOME_STREAM_TARGET,
  incomeStreamTargetData
});

export const CreateIncomeStreamTargetSuccess = incomeStreamTargetData => ({
  type: CREATE_INCOME_STREAM_TARGET_SUCCESS,
  incomeStreamTargetData
});

export const CreateIncomeStreamTargetFailure = error => ({
  type: CREATE_INCOME_STREAM_TARGET_FAILURE,
  error
});
