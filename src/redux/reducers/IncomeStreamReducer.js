import {
  CREATE_INCOME_STREAM,
  CREATE_INCOME_STREAM_SUCCESS,
  CREATE_INCOME_STREAM_FAILURE,
  CREATE_INCOME_STREAM_TARGET,
  CREATE_INCOME_STREAM_TARGET_SUCCESS,
  CREATE_INCOME_STREAM_TARGET_FAILURE
} from "../ActionTypes/IncomeStream";

const initialState = {
  IncomeStreamData: {},
  IncomeStreamTargetData: {},
  loading: false,
  disabled: true,
  isSaving: false,
  modal: false
};

export const incomeStream = (state = initialState, action) => {
  switch (action.Type) {
    case CREATE_INCOME_STREAM:
      return { ...state, loading: true };
    case CREATE_INCOME_STREAM_FAILURE:
      return { ...state, loading: false, errors: action.errors };
    case CREATE_INCOME_STREAM_SUCCESS:
      return { ...state, loading: false, IncomeStreamData: action.data };
    case CREATE_INCOME_STREAM_TARGET:
      return { ...state, loading: true };
    case CREATE_INCOME_STREAM_TARGET_SUCCESS:
      return { ...state, IncomeStreamTargetData: action.data, loading: false };
    case CREATE_INCOME_STREAM_TARGET_FAILURE:
      return { ...state, errors: action.errors, loading: false };
    default:
      return state;
  }
};
