import { Instance } from "mobx-state-tree"
import { SpeciesFilmsConnectionModelBase } from "./SpeciesFilmsConnectionModel.base"

/* The TypeScript type of an instance of SpeciesFilmsConnectionModel */
export interface SpeciesFilmsConnectionModelType extends Instance<typeof SpeciesFilmsConnectionModel.Type> {}

/* A graphql query fragment builders for SpeciesFilmsConnectionModel */
export { selectFromSpeciesFilmsConnection, speciesFilmsConnectionModelPrimitives, SpeciesFilmsConnectionModelSelector } from "./SpeciesFilmsConnectionModel.base"

/**
 * SpeciesFilmsConnectionModel
 *
 * A connection to a list of items.
 */
export const SpeciesFilmsConnectionModel = SpeciesFilmsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
