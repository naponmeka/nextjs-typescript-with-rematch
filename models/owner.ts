import { Dispatch } from "../store";

export type OwnerState = {
  name: string;
  age: number;
};

export const owner = {
  state: {
    name: "Napon",
    age: 25
  },
  reducers: {
    incrementAge: (state: OwnerState) => {
      return {
        ...state,
        age: state.age + 1
      };
    }
  },
  effects: (dispatch: Dispatch) => ({})
};
