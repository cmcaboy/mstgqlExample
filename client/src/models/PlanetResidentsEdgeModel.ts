import { Instance } from "mobx-state-tree"
import { PlanetResidentsEdgeModelBase } from "./PlanetResidentsEdgeModel.base"

/* The TypeScript type of an instance of PlanetResidentsEdgeModel */
export interface PlanetResidentsEdgeModelType extends Instance<typeof PlanetResidentsEdgeModel.Type> {}

/* A graphql query fragment builders for PlanetResidentsEdgeModel */
export { selectFromPlanetResidentsEdge, planetResidentsEdgeModelPrimitives, PlanetResidentsEdgeModelSelector } from "./PlanetResidentsEdgeModel.base"

/**
 * PlanetResidentsEdgeModel
 *
 * An edge in a connection.
 */
export const PlanetResidentsEdgeModel = PlanetResidentsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
