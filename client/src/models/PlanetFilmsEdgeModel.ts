import { Instance } from "mobx-state-tree"
import { PlanetFilmsEdgeModelBase } from "./PlanetFilmsEdgeModel.base"

/* The TypeScript type of an instance of PlanetFilmsEdgeModel */
export interface PlanetFilmsEdgeModelType extends Instance<typeof PlanetFilmsEdgeModel.Type> {}

/* A graphql query fragment builders for PlanetFilmsEdgeModel */
export { selectFromPlanetFilmsEdge, planetFilmsEdgeModelPrimitives, PlanetFilmsEdgeModelSelector } from "./PlanetFilmsEdgeModel.base"

/**
 * PlanetFilmsEdgeModel
 *
 * An edge in a connection.
 */
export const PlanetFilmsEdgeModel = PlanetFilmsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
