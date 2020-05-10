import { Instance } from "mobx-state-tree"
import { FilmsConnectionModelBase } from "./FilmsConnectionModel.base"

/* The TypeScript type of an instance of FilmsConnectionModel */
export interface FilmsConnectionModelType extends Instance<typeof FilmsConnectionModel.Type> {}

/* A graphql query fragment builders for FilmsConnectionModel */
export { selectFromFilmsConnection, filmsConnectionModelPrimitives, FilmsConnectionModelSelector } from "./FilmsConnectionModel.base"

/**
 * FilmsConnectionModel
 *
 * A connection to a list of items.
 */
export const FilmsConnectionModel = FilmsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
