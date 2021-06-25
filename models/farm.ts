import { Dispatch } from "../store";

export type FarmState = {
  chickens: number;
  eggs: number;
};

export const farm = {
  state: {
    chickens: 0,
    eggs: 0
  },
  reducers: {
    incrementEgg: (state: FarmState) => {
      return {
        ...state,
        eggs: state.eggs + 1
      };
    },
    incrementChicken: (state: FarmState, payload: number) => {
      return {
        ...state,
        chickens: state.chickens + payload
      };
    }
  },
  effects: (dispatch: Dispatch) => ({
    async incrementEggAsync(): Promise<void> {
      await new Promise(resolve => setTimeout(resolve, 500));
      dispatch.farm.incrementEgg();
    },
    async incrementChickenAsync(payload: number): Promise<void> {
      await new Promise(resolve => setTimeout(resolve, 500));
      dispatch.farm.incrementChicken(payload);
    }
  })
};
