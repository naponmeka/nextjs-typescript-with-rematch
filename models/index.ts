import { Models } from '@rematch/core'
import { farm } from "./farm";
import { owner } from "./owner";

export interface RootModel extends Models<RootModel> {
  farm: typeof farm;
  owner: typeof owner;
}

export const models: RootModel = {
  farm,
  owner
};
