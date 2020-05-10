import { Instance } from "mobx-state-tree"
import { StarshipPilotsEdgeModelBase } from "./StarshipPilotsEdgeModel.base"

/* The TypeScript type of an instance of StarshipPilotsEdgeModel */
export interface StarshipPilotsEdgeModelType extends Instance<typeof StarshipPilotsEdgeModel.Type> {}

/* A graphql query fragment builders for StarshipPilotsEdgeModel */
export { selectFromStarshipPilotsEdge, starshipPilotsEdgeModelPrimitives, StarshipPilotsEdgeModelSelector } from "./StarshipPilotsEdgeModel.base"

/**
 * StarshipPilotsEdgeModel
 *
 * An edge in a connection.
 */
export const StarshipPilotsEdgeModel = StarshipPilotsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
