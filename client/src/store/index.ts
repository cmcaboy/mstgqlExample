import { createHttpClient } from "mst-gql";
import { RootStore, StoreContext } from "../models";

const rootStore = RootStore.create(undefined, {
  gqlHttpClient: createHttpClient("http://localhost:52459"),
});

export { rootStore };
