import { Instance } from "mobx-state-tree"
import { PersonStarshipsEdgeModelBase } from "./PersonStarshipsEdgeModel.base"

/* The TypeScript type of an instance of PersonStarshipsEdgeModel */
export interface PersonStarshipsEdgeModelType extends Instance<typeof PersonStarshipsEdgeModel.Type> {}

/* A graphql query fragment builders for PersonStarshipsEdgeModel */
export { selectFromPersonStarshipsEdge, personStarshipsEdgeModelPrimitives, PersonStarshipsEdgeModelSelector } from "./PersonStarshipsEdgeModel.base"

/**
 * PersonStarshipsEdgeModel
 *
 * An edge in a connection.
 */
export const PersonStarshipsEdgeModel = PersonStarshipsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
