import { Instance } from "mobx-state-tree"
import { PlanetFilmsConnectionModelBase } from "./PlanetFilmsConnectionModel.base"

/* The TypeScript type of an instance of PlanetFilmsConnectionModel */
export interface PlanetFilmsConnectionModelType extends Instance<typeof PlanetFilmsConnectionModel.Type> {}

/* A graphql query fragment builders for PlanetFilmsConnectionModel */
export { selectFromPlanetFilmsConnection, planetFilmsConnectionModelPrimitives, PlanetFilmsConnectionModelSelector } from "./PlanetFilmsConnectionModel.base"

/**
 * PlanetFilmsConnectionModel
 *
 * A connection to a list of items.
 */
export const PlanetFilmsConnectionModel = PlanetFilmsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
