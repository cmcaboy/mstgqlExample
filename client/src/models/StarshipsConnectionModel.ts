import { Instance } from "mobx-state-tree"
import { StarshipsConnectionModelBase } from "./StarshipsConnectionModel.base"

/* The TypeScript type of an instance of StarshipsConnectionModel */
export interface StarshipsConnectionModelType extends Instance<typeof StarshipsConnectionModel.Type> {}

/* A graphql query fragment builders for StarshipsConnectionModel */
export { selectFromStarshipsConnection, starshipsConnectionModelPrimitives, StarshipsConnectionModelSelector } from "./StarshipsConnectionModel.base"

/**
 * StarshipsConnectionModel
 *
 * A connection to a list of items.
 */
export const StarshipsConnectionModel = StarshipsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
