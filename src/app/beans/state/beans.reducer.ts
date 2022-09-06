import { loadBeansSuccess } from './beans.actions';
import { initialState } from './beans.state';
import { createReducer, on } from "@ngrx/store";

const _beansReducer = createReducer(
  initialState,
  on(loadBeansSuccess, (state, action) => {
    return {
      ...state,
      beans: action.beans,
      loading: false
    };
  }));

export function beansReducer(state, action) {
  return _beansReducer(state, action)
}
