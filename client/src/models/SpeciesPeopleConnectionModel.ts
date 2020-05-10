import { Instance } from "mobx-state-tree"
import { SpeciesPeopleConnectionModelBase } from "./SpeciesPeopleConnectionModel.base"

/* The TypeScript type of an instance of SpeciesPeopleConnectionModel */
export interface SpeciesPeopleConnectionModelType extends Instance<typeof SpeciesPeopleConnectionModel.Type> {}

/* A graphql query fragment builders for SpeciesPeopleConnectionModel */
export { selectFromSpeciesPeopleConnection, speciesPeopleConnectionModelPrimitives, SpeciesPeopleConnectionModelSelector } from "./SpeciesPeopleConnectionModel.base"

/**
 * SpeciesPeopleConnectionModel
 *
 * A connection to a list of items.
 */
export const SpeciesPeopleConnectionModel = SpeciesPeopleConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
