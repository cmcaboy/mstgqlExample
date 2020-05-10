import { Instance } from "mobx-state-tree"
import { StarshipModelBase } from "./StarshipModel.base"

/* The TypeScript type of an instance of StarshipModel */
export interface StarshipModelType extends Instance<typeof StarshipModel.Type> {}

/* A graphql query fragment builders for StarshipModel */
export { selectFromStarship, starshipModelPrimitives, StarshipModelSelector } from "./StarshipModel.base"

/**
 * StarshipModel
 *
 * A single transport craft that has hyperdrive capability.
 */
export const StarshipModel = StarshipModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
