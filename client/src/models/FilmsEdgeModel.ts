import { Instance } from "mobx-state-tree"
import { FilmsEdgeModelBase } from "./FilmsEdgeModel.base"

/* The TypeScript type of an instance of FilmsEdgeModel */
export interface FilmsEdgeModelType extends Instance<typeof FilmsEdgeModel.Type> {}

/* A graphql query fragment builders for FilmsEdgeModel */
export { selectFromFilmsEdge, filmsEdgeModelPrimitives, FilmsEdgeModelSelector } from "./FilmsEdgeModel.base"

/**
 * FilmsEdgeModel
 *
 * An edge in a connection.
 */
export const FilmsEdgeModel = FilmsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
