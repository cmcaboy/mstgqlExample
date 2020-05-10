import { Instance } from "mobx-state-tree"
import { StarshipPilotsConnectionModelBase } from "./StarshipPilotsConnectionModel.base"

/* The TypeScript type of an instance of StarshipPilotsConnectionModel */
export interface StarshipPilotsConnectionModelType extends Instance<typeof StarshipPilotsConnectionModel.Type> {}

/* A graphql query fragment builders for StarshipPilotsConnectionModel */
export { selectFromStarshipPilotsConnection, starshipPilotsConnectionModelPrimitives, StarshipPilotsConnectionModelSelector } from "./StarshipPilotsConnectionModel.base"

/**
 * StarshipPilotsConnectionModel
 *
 * A connection to a list of items.
 */
export const StarshipPilotsConnectionModel = StarshipPilotsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
