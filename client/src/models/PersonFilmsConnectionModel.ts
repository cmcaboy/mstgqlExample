import { Instance } from "mobx-state-tree"
import { PersonFilmsConnectionModelBase } from "./PersonFilmsConnectionModel.base"

/* The TypeScript type of an instance of PersonFilmsConnectionModel */
export interface PersonFilmsConnectionModelType extends Instance<typeof PersonFilmsConnectionModel.Type> {}

/* A graphql query fragment builders for PersonFilmsConnectionModel */
export { selectFromPersonFilmsConnection, personFilmsConnectionModelPrimitives, PersonFilmsConnectionModelSelector } from "./PersonFilmsConnectionModel.base"

/**
 * PersonFilmsConnectionModel
 *
 * A connection to a list of items.
 */
export const PersonFilmsConnectionModel = PersonFilmsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
