import { Bean } from "../model/bean";


export interface BeansState {
  beans: Bean[];
  loading: boolean;
}

export const initialState: BeansState = {
  beans: [],
  loading: true
};
