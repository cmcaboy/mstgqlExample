import { Instance } from "mobx-state-tree"
import { PeopleConnectionModelBase } from "./PeopleConnectionModel.base"

/* The TypeScript type of an instance of PeopleConnectionModel */
export interface PeopleConnectionModelType extends Instance<typeof PeopleConnectionModel.Type> {}

/* A graphql query fragment builders for PeopleConnectionModel */
export { selectFromPeopleConnection, peopleConnectionModelPrimitives, PeopleConnectionModelSelector } from "./PeopleConnectionModel.base"

/**
 * PeopleConnectionModel
 *
 * A connection to a list of items.
 */
export const PeopleConnectionModel = PeopleConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
