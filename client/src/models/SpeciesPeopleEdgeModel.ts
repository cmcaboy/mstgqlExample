import { Instance } from "mobx-state-tree"
import { SpeciesPeopleEdgeModelBase } from "./SpeciesPeopleEdgeModel.base"

/* The TypeScript type of an instance of SpeciesPeopleEdgeModel */
export interface SpeciesPeopleEdgeModelType extends Instance<typeof SpeciesPeopleEdgeModel.Type> {}

/* A graphql query fragment builders for SpeciesPeopleEdgeModel */
export { selectFromSpeciesPeopleEdge, speciesPeopleEdgeModelPrimitives, SpeciesPeopleEdgeModelSelector } from "./SpeciesPeopleEdgeModel.base"

/**
 * SpeciesPeopleEdgeModel
 *
 * An edge in a connection.
 */
export const SpeciesPeopleEdgeModel = SpeciesPeopleEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
