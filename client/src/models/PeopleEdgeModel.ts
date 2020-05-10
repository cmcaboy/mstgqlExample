import { Instance } from "mobx-state-tree"
import { PeopleEdgeModelBase } from "./PeopleEdgeModel.base"

/* The TypeScript type of an instance of PeopleEdgeModel */
export interface PeopleEdgeModelType extends Instance<typeof PeopleEdgeModel.Type> {}

/* A graphql query fragment builders for PeopleEdgeModel */
export { selectFromPeopleEdge, peopleEdgeModelPrimitives, PeopleEdgeModelSelector } from "./PeopleEdgeModel.base"

/**
 * PeopleEdgeModel
 *
 * An edge in a connection.
 */
export const PeopleEdgeModel = PeopleEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
