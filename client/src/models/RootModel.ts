import { Instance } from "mobx-state-tree"
import { RootModelBase } from "./RootModel.base"

/* The TypeScript type of an instance of RootModel */
export interface RootModelType extends Instance<typeof RootModel.Type> {}

/* A graphql query fragment builders for RootModel */
export { selectFromRoot, rootModelPrimitives, RootModelSelector } from "./RootModel.base"

/**
 * RootModel
 */
export const RootModel = RootModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
