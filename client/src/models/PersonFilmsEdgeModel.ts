import { Instance } from "mobx-state-tree"
import { PersonFilmsEdgeModelBase } from "./PersonFilmsEdgeModel.base"

/* The TypeScript type of an instance of PersonFilmsEdgeModel */
export interface PersonFilmsEdgeModelType extends Instance<typeof PersonFilmsEdgeModel.Type> {}

/* A graphql query fragment builders for PersonFilmsEdgeModel */
export { selectFromPersonFilmsEdge, personFilmsEdgeModelPrimitives, PersonFilmsEdgeModelSelector } from "./PersonFilmsEdgeModel.base"

/**
 * PersonFilmsEdgeModel
 *
 * An edge in a connection.
 */
export const PersonFilmsEdgeModel = PersonFilmsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
