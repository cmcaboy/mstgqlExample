import { Instance } from "mobx-state-tree"
import { PlanetResidentsConnectionModelBase } from "./PlanetResidentsConnectionModel.base"

/* The TypeScript type of an instance of PlanetResidentsConnectionModel */
export interface PlanetResidentsConnectionModelType extends Instance<typeof PlanetResidentsConnectionModel.Type> {}

/* A graphql query fragment builders for PlanetResidentsConnectionModel */
export { selectFromPlanetResidentsConnection, planetResidentsConnectionModelPrimitives, PlanetResidentsConnectionModelSelector } from "./PlanetResidentsConnectionModel.base"

/**
 * PlanetResidentsConnectionModel
 *
 * A connection to a list of items.
 */
export const PlanetResidentsConnectionModel = PlanetResidentsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
