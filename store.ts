import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import { models, RootModel } from "./models";

export const initializeStore = (initialState?: RootModel) => {
  if (initialState) {
    return init({
      models,
      redux: {
        initialState
      }
    });
  } else {
    return init({
      models
    });
  }
};

export type Dispatch = RematchDispatch<RootModel>;
export type iRootState = RematchRootState<RootModel>;
