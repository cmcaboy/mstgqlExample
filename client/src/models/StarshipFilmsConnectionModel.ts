import { Instance } from "mobx-state-tree"
import { StarshipFilmsConnectionModelBase } from "./StarshipFilmsConnectionModel.base"

/* The TypeScript type of an instance of StarshipFilmsConnectionModel */
export interface StarshipFilmsConnectionModelType extends Instance<typeof StarshipFilmsConnectionModel.Type> {}

/* A graphql query fragment builders for StarshipFilmsConnectionModel */
export { selectFromStarshipFilmsConnection, starshipFilmsConnectionModelPrimitives, StarshipFilmsConnectionModelSelector } from "./StarshipFilmsConnectionModel.base"

/**
 * StarshipFilmsConnectionModel
 *
 * A connection to a list of items.
 */
export const StarshipFilmsConnectionModel = StarshipFilmsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
