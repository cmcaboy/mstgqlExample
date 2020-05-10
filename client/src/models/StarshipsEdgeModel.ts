import { Instance } from "mobx-state-tree"
import { StarshipsEdgeModelBase } from "./StarshipsEdgeModel.base"

/* The TypeScript type of an instance of StarshipsEdgeModel */
export interface StarshipsEdgeModelType extends Instance<typeof StarshipsEdgeModel.Type> {}

/* A graphql query fragment builders for StarshipsEdgeModel */
export { selectFromStarshipsEdge, starshipsEdgeModelPrimitives, StarshipsEdgeModelSelector } from "./StarshipsEdgeModel.base"

/**
 * StarshipsEdgeModel
 *
 * An edge in a connection.
 */
export const StarshipsEdgeModel = StarshipsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
