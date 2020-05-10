import { Instance } from "mobx-state-tree"
import { StarshipFilmsEdgeModelBase } from "./StarshipFilmsEdgeModel.base"

/* The TypeScript type of an instance of StarshipFilmsEdgeModel */
export interface StarshipFilmsEdgeModelType extends Instance<typeof StarshipFilmsEdgeModel.Type> {}

/* A graphql query fragment builders for StarshipFilmsEdgeModel */
export { selectFromStarshipFilmsEdge, starshipFilmsEdgeModelPrimitives, StarshipFilmsEdgeModelSelector } from "./StarshipFilmsEdgeModel.base"

/**
 * StarshipFilmsEdgeModel
 *
 * An edge in a connection.
 */
export const StarshipFilmsEdgeModel = StarshipFilmsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
