import { Instance } from "mobx-state-tree"
import { PersonStarshipsConnectionModelBase } from "./PersonStarshipsConnectionModel.base"

/* The TypeScript type of an instance of PersonStarshipsConnectionModel */
export interface PersonStarshipsConnectionModelType extends Instance<typeof PersonStarshipsConnectionModel.Type> {}

/* A graphql query fragment builders for PersonStarshipsConnectionModel */
export { selectFromPersonStarshipsConnection, personStarshipsConnectionModelPrimitives, PersonStarshipsConnectionModelSelector } from "./PersonStarshipsConnectionModel.base"

/**
 * PersonStarshipsConnectionModel
 *
 * A connection to a list of items.
 */
export const PersonStarshipsConnectionModel = PersonStarshipsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
