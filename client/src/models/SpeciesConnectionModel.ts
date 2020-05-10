import { Instance } from "mobx-state-tree"
import { SpeciesConnectionModelBase } from "./SpeciesConnectionModel.base"

/* The TypeScript type of an instance of SpeciesConnectionModel */
export interface SpeciesConnectionModelType extends Instance<typeof SpeciesConnectionModel.Type> {}

/* A graphql query fragment builders for SpeciesConnectionModel */
export { selectFromSpeciesConnection, speciesConnectionModelPrimitives, SpeciesConnectionModelSelector } from "./SpeciesConnectionModel.base"

/**
 * SpeciesConnectionModel
 *
 * A connection to a list of items.
 */
export const SpeciesConnectionModel = SpeciesConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
